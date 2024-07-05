"use client"
import Link from "next/link"
import classes from './page.module.css'
import googleLogo from '../../../public/google.svg'
import Logo42 from '../../../public/42.svg'
import Image from 'next/image'
import { useState } from "react"

const LoginButton = ({url, text}) => {
  return (
    <Link href={url} className={classes.button}>
      <h2>{text}</h2>
    </Link>
  )
}

const LoginWithButton = ({url, image}) => {
  return (
    <Link href={url} className={classes.buttonCircle}>
      <Image src={image} alt="image" width={24} height={24}></Image>
    </Link>
  )
}

const InputField = ({ placeholder, type, setData}) => {
  return <input className={classes.inputField} placeholder={placeholder} type={type} onChange={(e) => setData(e.target.value)}/>;
};

const handleSubmit = async (event, username, email, firstName, lastName, password, confermPassword, errors, setErrors) =>{
  event.preventDefault();

  console.log("username: ", username);
  console.log("email: ", email);
  console.log("firstName: ", firstName);
  console.log("lastName: ", lastName);
  console.log("password: ", password);
  console.log("confermPassword: ", confermPassword);

  const formData = new FormData();
  formData.append('username', username);
  formData.append('email', email);
  formData.append('first_name', firstName);
  formData.append('last_name', lastName);
  formData.append('password', password);
  formData.append('password_confirmation', confermPassword);

  try {
    const response = await fetch("http://localhost:8000/lab/register/", {
      method: 'POST',
      body: formData
    });

    const responseData = await response.json();
    setErrors(responseData);

    if (response.ok) {
      console.log("Success:", responseData);
    } else {
      console.log("Eeerror:", responseData);
    }

  } catch (error) {
    console.error("Netork Errwor:", error);
  }
}

const LoginBox = ({username, setUsername, email, setEmail, firstName, setFirstName, lastName, setLastName, password, setPassword, confermPassword, setConfirmPassword, errors, setErrors}) =>{
  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginTitle}>
        <h2>Login</h2>
      </div>
      <form onSubmit={(event) => handleSubmit(event, username, email, firstName, lastName, password, confermPassword, errors, setErrors)}>
        <InputField placeholder='User Name' type="text" setData={setUsername} errors={errors}/>
        {errors["username"] && <p className={classes.error}>{errors["username"]}</p>}
        <InputField placeholder='Email' type="email" setData={setEmail}/>
        {errors["email"] && <p className={classes.error}>{errors["email"]}</p>}
        <InputField placeholder='First Name' type="text" setData={setFirstName}/>
        <InputField placeholder='Last Name' type="text" setData={setLastName}/>
        <InputField placeholder='Password' type="password" setData={setPassword}/>
        {errors["password"] && <p className={classes.error}>{errors["password"]}</p>}
        <InputField placeholder='Confirm Password' type="password" setData={setConfirmPassword}/>
        {errors["password_confirmation"] && <p className={classes.error}>{errors["password_confirmation"]}</p>}
        <button type="submit" className={classes.button}>
          <h2>Register</h2>
        </button>
      </form>
    </div>
  )
}

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confermPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  return (
    <div className={classes.parent}>
      <div className={classes.container}>
        <div className={classes.loginAndTitle}>
          <div className={classes.titleContainer}>
            <h1 className={classes.title}>Title</h1>
            <p className={classes.intro}>Welcome to the login page of pingpong game. Have fun!</p>
          </div>
          <LoginBox 
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            password={password}
            setPassword={setPassword}
            confermPassword={confermPassword}
            setConfirmPassword={setConfirmPassword}
            errors={errors}
            setErrors={setErrors}
          />
        </div>
      </div>
      <div className={classes.tst}>
        <div className={classes.footerText}>
          Ping pong, also known as table tennis, is a sport in which two or four players hit a lightweight ball back and forth across a table using small paddles. The game is played on a rectangular table divided by a net. The objective is to score points by hitting the ball in such a way that the opponent is unable to return it correctly.
        </div>
      </div>
    </div>
  )
}

export default Login
