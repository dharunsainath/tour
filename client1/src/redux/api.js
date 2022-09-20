import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:8000/" })

export const signIn = (formData) => {
    console.log(formData)
    return API.post("/users/signin", formData)
}

export const signUp=(formData) => {
    console.log(formData)
    return API.post("/users/signup", formData)
}