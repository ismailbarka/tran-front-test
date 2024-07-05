import Link from "next/link"
import classes from "./PlayerInfos.module.css"
import Image from 'next/image'
import PlayerImage from '../../../public/PlayerImage.png'
import Button from '../Button/Button'


const logs = [
    {res: 'win', by: 5, to: 1},
    {res: 'lose', by: 3, to: 5},
    {res: 'win', by: 5, to: 1},
    {res: 'lose', by: 1, to: 10},
    {res: 'lose', by: 5, to: 9},
    {res: 'win', by: 2, to: 1},
    {res: 'win', by: 2, to: 1},
    {res: 'win', by: 2, to: 1},
    {res: 'win', by: 2, to: 1},
    {res: 'win', by: 2, to: 1},
    {res: 'win', by: 2, to: 1},
    {res: 'win', by: 2, to: 1},
    {res: 'win', by: 2, to: 1},
    {res: 'win', by: 2, to: 1},
    {res: 'win', by: 2, to: 1},
];

const moreInfos = {
    id : 122165,
    rank : 10,
    gameWins: "40 of 62",
    winRate: 64.5
}

const InfoLine = ({label, value}) =>{
    return <p>{label}: <span className={classes.info}>{value}</span></p>
}

const LogItem = ({res, by, to})=>{

    return <div className={res === "win" ? classes.resContainerWin: classes.resContainerLose}>
        <h1>{res}</h1>
        <h1>{by}</h1>
        <h1>-</h1>
        <h1>{to}</h1>
        <h1>rank</h1>    
    </div>
}


const PlayerInfos = () => {
  return <div className={classes.container}>
        <div className={classes.simpleInfos}>
            <Image alt="asd" src={PlayerImage} className={classes.image}/>
            <p className={classes.name}>ismailas</p>
            <div className={classes.buttonContainer}>
                <Button width="105px" height="35px" url="/some-url" text="edit your infos"/>
            </div>
        </div>
        <div className={classes.moreinfos}>
            <div className={classes.leftSide}>
                <InfoLine label="id" value={moreInfos.id} />
                <InfoLine label="rank" value={moreInfos.rank} />
                <InfoLine label="gameWins" value={moreInfos.gameWins} />
            </div>
            <div className={classes.rightSide}>
                <InfoLine label="id" value={moreInfos.id} />
                <InfoLine label="rank" value={moreInfos.rank} />
                <InfoLine label="gameWins" value={moreInfos.gameWins} />
            </div>
        </div>
        <div>
            <h1 className={classes.title}>the result of the last 40 matchs</h1>
            {logs.map((item, index) =>{
                return <LogItem key={index} {...item}/>
            })}
        </div>
    </div>
}

export default PlayerInfos
