import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


import userModel from "../models/user.js"

const secret = "test"

export const signup = async (req, res) => {
    console.log("hello")
    const { email, password, firstName, lastName } = req.body;
    console.log(req.body)
    try {
        const oldUser = await userModel.findOne({ email })
        console.log(req.body)
        if (oldUser) {
            return res.status(400).json({ message: "user signedin" })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await userModel.create(
            {
                email,
                password: hashedPassword,
                name: `${firstName} ${lastName}`

            }
        )

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" })

        console.log("Congo")
        res.status(201).json({ result, token })
    }

    catch (error) {
        res.status(500).json({ message: "something went wrong" })

        console.log(error)
    }

}

export const signIn = async (req, res) => {

    const { email, password } = req.body
    console.log(email)

    try {
        const oldUser = await userModel.findOne({ email })

        if (!oldUser) {
            res.status(404).json({ message: "user doesnot exist" })
        }

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

        if (!isPasswordCorrect) return res.status(400).json({ message: "invalid credentials" })

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" })

        res.status(200).json({ result: oldUser, token })
    }

    catch (error) {
        res.status(500).json({ message: "something went wrong" })

        console.log(error)


    }

}