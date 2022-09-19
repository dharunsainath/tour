import React,{useEffect,useState} from 'react'
import {MDBCard,MDBCardBody,MDBInput,MDBCardFooter,MDBBtn,MDBIcon, MDBValidation ,MDBSpinner} from "mdb-react-ui-kit"
import { Link , useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {toast} from "react-toastify"
import {login} from "../redux/features/authSlice"

const initialState={
  email: '',
  password: ''
}

const Login = () => {

  const [formValue,setFormValue] = useState(initialState)
  const { loading, error, user } = useSelector((state) => ({ ...state.auth }));

  console.log(loading, error)


  const {email,password} = formValue
  const dispatch =useDispatch();
  const navigate =useNavigate();
  
  

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(email && password)
    {
      console.log(formValue)
      dispatch(login({formValue,navigate,toast}))
      console.log(user)
    }
    

  }
  const onInputChange=(e)=>{
    let {name,value} = e.target
    

    setFormValue({...formValue,[name]: value})



  }
  return (
    <div style={{margin:"auto" , padding: "15px" , maxWidth: "450px", alignContent: "center",marginTop: "120px"}}>
      <MDBCard alignment='center'>
        <MDBCardBody>
        <MDBIcon fas icon="user-circle" className='fa-2x'></MDBIcon>
        <h5>Sign in</h5>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <div className='col-md-12'>
              <MDBInput label="email" type="email" value={email} name="email" onChange={onInputChange} required invalid validation="please provide email"></MDBInput>


             </div>
             <div className='col-md-12'>
              <MDBInput label="password" type="password" value={password} name="password" onChange={onInputChange} required invalid validation="please provide password"></MDBInput>
              

             </div>
             <div className='col-md-12'>

              <MDBBtn style={{width: '100%'} } className="mt-2">
                Login
              </MDBBtn>
             </div>
          </MDBValidation>
          </MDBCardBody>
          <MDBCardFooter>
            <Link to="/register">
            <p>If you dont have an account , please signup</p>
            </Link>
          </MDBCardFooter>
      </MDBCard>

    </div>
  )
}

export default Login