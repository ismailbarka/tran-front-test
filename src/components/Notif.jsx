
import Image from 'next/image'
import classes from './Notif.module.css'
import NotifImage from '../../public/Notif.svg'

const Notif = ({selected, imagee, url}) => {
    return (
        <div className={classes.container}>
            <Image alt='test' src={NotifImage} width={20} height={20}></Image>
        </div>
        
    )
  }
  
  export default Notif
  