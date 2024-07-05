import SearchBar from './SearchBar'
import classes from './Header.module.css'
import Notif from './Notif'
const Header = ({selected, imagee, url}) => {
  return (
    <div className={classes.container}>
        <h1 className={classes.title}>PingPong</h1>
        <SearchBar/>
        <div className={classes.notif}>
          <Notif />
        </div>
    </div>
  )
}

export default Header
