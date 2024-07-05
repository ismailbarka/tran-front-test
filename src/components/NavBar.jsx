"use client"
import React, { useState } from 'react'
import ButtonNav from "../components/ButtonNav"
import home from "../../public/home.svg"
import game from "../../public/game.svg"
import chat from "../../public/chat.svg"
import profile from "../../public/profile.svg"
import settings from "../../public/settings.svg"
import classes from './NavBar.module.css'

const NavBar = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  const NavItems = [
    {page: "home", image: home, url: "/"},
    {page: "game", image: game, url: "/"},
    {page: "chat", image: chat, url: "/"},
    {page: "profile", image: profile, url: "/"},
    {page: "settings", image: settings, url: "/"}
  ];

  return (
    <div className={classes.container}>
      <div>

      </div>
      {NavItems.map(item =>(
        <button 
        key={item.page} 
        onClick={() => setSelectedPage(item.page)} 
        className={selectedPage === item.page ? classes.ButtonSelected : classes.ButtonNotSelected}
        >
          <ButtonNav selected={selectedPage === item.page ? true: false} url={item.url} imagee={item.image} />
        </button>
      ))}
    </div>
  )
}

export default NavBar
