import Link from "next/link";
import classes from './Button.module.css';

const Button = ({ width, height, url, text }) => {
    const inlineStyles = {
        width: width,
        height: height
    };

    return (
        <Link href={url} className={classes.container} style={inlineStyles}>
        {text}
        </Link>
    );
};

export default Button;
