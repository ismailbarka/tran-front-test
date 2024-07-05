"use client"
import Link from "next/link"
import classes from './page.module.css'
import googleLogo from '../../../public/google.svg'
import Logo42 from '../../../public/42.svg'
import Image from 'next/image'
import { useState } from "react"


const LoginButton = ({url, text}) =>{
  return <Link href={url} className={classes.button}>
      <h2>{text}</h2>
    </Link>
}
const LoginWithButton = ({url, image}) =>{
  return <Link href={url} className={classes.buttonCircle}>
      <Image src={image} alt="image" width={24} height={24}></Image>
    </Link>
}



const InputField = ({ placeholder, type, setData}) => {
  return <input className={classes.inputField} placeholder={placeholder} type={type} onChange={(e) => setData(e.target.value)}/>;
};

const toLocalStorage = (responseData) =>{

  localStorage.setItem("refresh", responseData["refresh"]);
  localStorage.setItem("access", responseData["access"]);

}

const handleSubmit = async (event, username, password, errors, setErrors) =>{
  event.preventDefault();

  console.log("username: ", username);
  console.log("password: ", password);

  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  try {
    const response = await fetch("http://localhost:8000/lab/login/", {
      method: 'POST',
      body: formData
    });

    const responseData = await response.json();
    setErrors(responseData);

    if (response.ok) {
      console.log("Success:", responseData);
      toLocalStorage(responseData);
    } else {
      console.log("Error:", responseData);
    }

  } catch (error) {
    console.error("Network Error:", error.message);
  }
}

const LoginBox = ({username, setUsername, password, setPassword, errors, setErrors}) =>{
  return <div className={classes.loginContainer}>
  <div className={classes.loginTitle}>
    <h2>Login</h2>
  </div>
  <form onSubmit={(event) => handleSubmit(event, username, password, errors, setErrors)} className={classes.loginBody}>
        <InputField placeholder='User Name' type="text" setData={setUsername}/>
        <InputField placeholder='Password' type="password" setData={setPassword}/>
        {errors["detail"] && <p className={classes.error}>{errors["detail"]}</p>}
        <button type="submet" className={classes.button}>
          <h2>login</h2>
        </button>
        <div className={classes.LoginWith}>
          <LoginWithButton url={"/"} image={googleLogo} />
          <LoginWithButton url={"/"} image={Logo42} />
        </div>
        <div className={classes.signin}>you dont have an account : <Link href="/" className={classes.link}>SignUp</Link></div>
  </form>
</div>
}

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  return (
      <div className={classes.parent}>
        <div className={classes.container}>
          <div className={classes.loginAndTitle}>
            <div className={classes.titleContainer}>
              <h1 className={classes.title}>title </h1>
              <p className={classes.intro}>welcome to the login page of pingpong game have fun</p>
            </div>
            <LoginBox 
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              errors={errors}
              setErrors={setErrors}
            ></LoginBox>
          </div>
        </div>
        <div className={classes.tst}>
          <div className={classes.footerText}>Ping pong, also known as table tennis, is a sport in which two or four players hit a lightweight ball back and forth across a table using small paddles. The game is played on a rectangular table divided by a net. The objective is to score points by hitting the ball in such a way that the opponent is unable to return it correctly.
          </div>
        </div>    
      </div>
  )
}

export default Login



// open -na Google\ Chrome --args --disable-web-security --user-data-dir="/tmp/chrome_dev_session"
// open -na Google\ Chrome --args --disable-web-security --user-data-dir="/tmp/chrome_dev_session"