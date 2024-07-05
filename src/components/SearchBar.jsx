"use client"
import Image from "next/image"
import classes from "./SearchBar.module.css"
import searchImage from '../../public/Search.svg'

const SearchBar = ({selected, imagee, url}) => {
    return (
        <div className={classes.container}>
            <input placeholder="FIND NEW FRIENDS" className={classes.input}></input>
            <Image alt="te" className={classes.imageStyle} src={searchImage} width={20} height={20}></Image>
        </div>
        

    )
  }
  
  export default SearchBar
  