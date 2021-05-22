import React from "react";
import Proptypes from "prop-types";
import "./index.css";

const Bar = ({x, y, width, height, color, date, chartHeight, coefficient}) => (
    <g className="bar">
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={color}
        />
        <text x={x} y={y+10} transform={`rotate(-90 ${x+125} ${y+120})`}>
            <tspan> {height / coefficient } USD</tspan>
        </text>
        <text x={x } y={chartHeight } transform={`rotate(45 ${x -15} ${chartHeight +15 })`}>
            <tspan fill="red">{date}</tspan>
        </text>
    </g>

);

Bar.propTypes = {
    x: Proptypes.number.isRequired,
    y: Proptypes.number.isRequired,
    width: Proptypes.number.isRequired,
    height: Proptypes.number.isRequired,
    color: Proptypes.string,
    date: Proptypes.string.isRequired,
    chartHeight: Proptypes.number.isRequired,
    coefficient: Proptypes.number,
}

Bar.defaultProps = {
    color: '#0ac',
    coefficient: 0.01,
}

export default Bar;
