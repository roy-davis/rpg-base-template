import React from "react";
import './icons.css';
import SpriteSheet from "./sprite-sheet.svg";

interface SvgSpriteProps {
    icon: string,
    fill?: string,
    width?: number,
    height?: number,
};

const SvgSprite: React.FC<SvgSpriteProps> = (props) => {
    return (
        <svg 
            fill={props.fill}
            width={props.width}
            height={props.height}
            viewBox="0 0 100 100" 
            className={`icon icon-${props.icon}`}>
            <use xlinkHref={`${SpriteSheet}#${props.icon}`}></use>
        </svg>
	)
}

export default SvgSprite;
