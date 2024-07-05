import React, { useEffect } from 'react'
import classes from './page.module.css'
import PlayerInfos from '../../../components/PlayerInfos/PlayerInfos'
import Rank from '../../../components/Rank/Rank'

const Profile = () => {

  useEffect( async() =>{
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
  },[])

  return (
    <div>
      <div className={classes.InfosContainer}>
        <div className={classes.playerInfos}>
          <PlayerInfos></PlayerInfos>
        </div>
        <div className={classes.rank}>
          <Rank></Rank>
        </div>
      </div>
      <div className={classes.space}>asd</div>
    </div>
  )
}

export default Profile
