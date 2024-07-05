"use client"
import React, { useState } from 'react'
import ButtonNav from "../../components/ButtonNav"
import home from "../../../public/home.svg"
import game from "../../../public/game.svg"
import chat from "../../../public/chat.svg"
import profile from "../../../public/profile.svg"
import settings from "../../../public/settings.svg"
import classes from './NavBarDown.module.css'

const NavBarDown = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  const NavItems = [
    {page: "home", image: home, url: "/home/profile"},
    {page: "game", image: game, url: "/home/profile"},
    {page: "chat", image: chat, url: "/home/profile"},
    {page: "profile", image: profile, url: "/home/profile"},
    {page: "settings", image: settings, url: "/home/profile"}
  ];

  return (
    <div className={classes.container}>
      {NavItems.map(item =>(
        <button 
        key={item.page} 
        onClick={() => setSelectedPage(item.page)} 
        className={selectedPage === item.page ? classes.ButtonSelected : classes.ButtonNotSelected}
        >
          <ButtonNav
            selected={selectedPage === item.page}
            url={item.url}
            imagee={item.image}
          />
        </button>
      ))}
    </div>
  )
}

export default NavBarDown
