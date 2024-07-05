import Link from "next/link";
import classes from "./Rank.module.css";
import Image from 'next/image';
import palyerImage from '../../../public/PlayerImage.png'

const dataHeader = {rank: "RANK", name: 'NAME', rating: 'RATING', nMatchs: "N MATCH"}

const data = [
    {rank: 1, name: 'ismail1', rating: '4500', nMatchs: 62},
    {rank: 2, name: 'ismail2', rating: '4500', nMatchs: 62},
    {rank: 3, name: 'ismail3', rating: '4500', nMatchs: 62},
    {rank: 4, name: 'ismail4', rating: '4500', nMatchs: 62},
    {rank: 5, name: 'ismail5', rating: '4500', nMatchs: 62},
    {rank: 6, name: 'ismail6', rating: '4500', nMatchs: 62},
    {rank: 7, name: 'ismail7', rating: '4500', nMatchs: 62},
    {rank: 8, name: 'ismail8', rating: '4500', nMatchs: 62},
    {rank: 9, name: 'ismail9', rating: '4500', nMatchs: 62},
    {rank: 10, name: 'ismail10', rating: '4500', nMatchs: 62},
    {rank: 11, name: 'ismail11', rating: '4500', nMatchs: 62},
    {rank: 12, name: 'ismail12', rating: '4500', nMatchs: 62},
    {rank: 13, name: 'ismail13', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 14, name: 'ismail14', rating: '4500', nMatchs: 62},
    {rank: 15, name: 'ismail15', rating: '4500', nMatchs: 62},
];

const RankPlayerInfo = ({ item }) => {

    return (
        <div className={classes.titlesContainer}>
            <h1 className={classes.element}>{item.rank}</h1>
            <h1 className={classes.element}>{item.name}</h1>
            <h1 className={classes.element}>{item.rating}</h1>
            <h1 className={classes.element}>{item.nMatchs}</h1>

        </div>
    );
};

const ColumnData = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.titlesContainer}>
                    <h1 className={classes.element}>{dataHeader.rank}</h1>
                    <h1 className={classes.element}>{dataHeader.name}</h1>
                    <h1 className={classes.element}>{dataHeader.rating}</h1>
                    <h1 className={classes.element}>{dataHeader.nMatchs}</h1>

                </div>
            </div>
            {data.map((item, index) => <RankPlayerInfo key={index} item={{ ...item}} /> )}
        </div>
    );
};

const Rank = () => {
    return (
        <div className={classes.container}>
            <ColumnData />
        </div>
    );
};

export default Rank;
