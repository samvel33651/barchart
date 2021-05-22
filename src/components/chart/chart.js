import React from "react";
import PropTypes from "prop-types";

const Chart = ({children, width, height}) => (
    <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
    >
        {children}
    </svg>
);

Chart.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};

export default Chart;