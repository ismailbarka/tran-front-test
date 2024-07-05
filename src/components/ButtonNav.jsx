import Link from "next/link"
import classes from "./ButtonNav.module.css"
import Image from 'next/image'


const ButtonNav = ({selected, imagee, url}) => {
  return (
    <Link href={url} >
        <div className={selected === true ? classes.container : classes.container1}>
          <Image src={imagee} alt='e' className={classes.img}/>
        </div>
    </Link>
  )
}

export default ButtonNav
