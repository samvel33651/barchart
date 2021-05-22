import React from "react";
import PropTypes from "prop-types";
import Chart from "../chart";
import Bar from "../bar";

const BarChart = ({ data, barWidth, marginBetweenBars }) => {

    const dataLength = data.length

    // Normalize data, we'll reduce all sizes to 0.01 of their original value
    const coefficient = 0.01
    const normalizedData = data.map(item =>
        Object.assign({}, item, { value: item.value * coefficient })
    )

    const chartHeight = normalizedData.reduce((acc, cur) => {
        const { value } = cur
        return value > acc ? value : acc
    }, 0)

    return (
        <Chart
            width={dataLength * (barWidth + marginBetweenBars)+60}
            height={700}
        >
            <rect x="0" y="0" width="5" height={chartHeight} stroke="black" fill="black"
                  fillOpacity="0.5" strokeOpacity="0.8"/>
            <rect x="0" y={chartHeight} width="100%" height={5} stroke="black" fill="black"
                  fillOpacity="0.5" strokeOpacity="0.8"/>
            {normalizedData.map((item, index) => {
                const { value, date } = item;

                return (
                    <Bar
                        key={date}
                        x={index * (barWidth + marginBetweenBars)+10}
                        y={chartHeight - value}
                        chartHeight={chartHeight}
                        coefficient={coefficient}
                        width={barWidth}
                        height={value}
                        date={date}
                    />
                )
            })}
        </Chart>
    )
}

BarChart.propTypes = {
    data: PropTypes.array.isRequired,
    barWidth: PropTypes.number,
    marginBetweenBars: PropTypes.number,
}

BarChart.defaultProps = {
    barWidth: 20,
    marginBetweenBars: 5
}

export default BarChart;
