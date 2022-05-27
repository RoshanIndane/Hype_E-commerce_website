
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import "./Register.css"
import { Link } from 'react-router-dom'


const Container=styled.div({
    width:'100vw',
    height:'100vh',
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
    })
    
    const Wrapper=styled.div({
    padding:'20px',
    width:'25%',
    backgroundColor:"whitesmoke"
    })
    
    const Title=styled.h1({
    fontSize:'30px',
    fontWeight:'300'
    })
    
    const Form=styled.form({
    display:"flex",
    flexDirection:'column'
    })
    
    const Input=styled.input({
    flex:'1',
    minWidth:'40%',
    margin:"10px 0px",
    padding:'10px'
    })
    
    
    
    const Button=styled.button({
    width:'40%',
    border:'none',
    padding:"15px 20px",
    backgroundColor:'teal',
    color:'whitesmoke',
    cursor:'pointer',
    marginBottom:'10px'
    })

const Ink=styled.a({
margin:'5px 0px',
fontSize:'12px',
textDecoration:'underline',
cursor:'pointer'

}) 


const Login = () => {
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const dispatch= useDispatch();
 // const {isFetching, error}= useSelector((state)=>state.user);


  const handleClick=(e)=>{
    e.preventDefault();
    login(dispatch,{username,password});
  }




  return (
    <Container className='loginbox' >
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>

                <Input placeholder="Username" onChange={(e)=> setUsername(e.target.value)} />
               
                <Input placeholder="Password" type="password" onChange={(e)=> setPassword(e.target.value)}/>
               
                <Button onClick={handleClick} >LOGIN</Button>
                <Ink>Do not you remember the password?</Ink>
               <Link to="/register"> <Ink>Create a new Account</Ink></Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login