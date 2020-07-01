import React from "react"
import { Chart } from "react-charts"

const LineChart = () => {
  const data = React.useMemo(
    () => [
      {
        specialLabel: "Total Distance 🏃‍♂️",
        data: [
          [new Date("2020-05-11"), 11],
          [new Date("2020-05-12"), 23],
          [new Date("2020-05-13"), 35],
          [new Date("2020-05-14"), 48],
          [new Date("2020-05-15"), 61],
          [new Date("2020-05-16"), 74],
          [new Date("2020-05-17"), 87],
          [new Date("2020-05-18"), 87],
          [new Date("2020-05-19"), 100],
          [new Date("2020-05-20"), 112],
          [new Date("2020-05-21"), 114],
          [new Date("2020-05-22"), 114],
          [new Date("2020-05-23"), 124],
          [new Date("2020-05-24"), 124],
          [new Date("2020-05-25"), 134],
          [new Date("2020-05-26"), 147],
          [new Date("2020-05-27"), 160],
          [new Date("2020-05-28"), 170],
          [new Date("2020-05-29"), 180],
          [new Date("2020-05-30"), 190],
          [new Date("2020-05-31"), 201],
          [new Date("2020-06-01"), 211],
          [new Date("2020-06-02"), 223],
          [new Date("2020-06-03"), 235],
          [new Date("2020-06-04"), 245],
          [new Date("2020-06-05"), 255],
          [new Date("2020-06-06"), 268],
          [new Date("2020-06-07"), 280],
        ],
      },
    ],
    []
  )

  const getLabel = React.useCallback(series => series.specialLabel, [])

  function CustomTooltip({ getStyle, primaryAxis, datum }) {
    return datum ? (
      <div
        style={{
          color: "white",
          pointerEvents: "none",
        }}
      >
        <h3
          style={{
            display: "block",
            textAlign: "center",
            color: "white",
          }}
        >
          {datum.originalDatum[0].toLocaleDateString()}
        </h3>

        <h4
          style={{
            display: "block",
            textAlign: "center",
            color: "white",
          }}
        >
          {datum.index - 1 >= 0 &&
            datum.originalDatum[1] -
              datum.originalSeries.data[datum.index - 1][1] !==
              0 &&
            `+${datum.originalDatum[1] -
              datum.originalSeries.data[datum.index - 1][1]}Km`}
        </h4>
        <h4
          style={{
            display: "block",
            textAlign: "center",
            color: "white",
          }}
        >
          {`${datum.seriesLabel} ${datum.originalDatum[1]}Km`}
        </h4>
        <div
          style={{
            width: "300px",
            height: "20px",
            display: "flex",
          }}
        ></div>
      </div>
    ) : null
  }

  const axes = React.useMemo(
    () => [
      { primary: true, type: "utc", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  )

  const tooltip = React.useMemo(
    () => ({
      render: ({ datum, primaryAxis, getStyle }) => {
        return <CustomTooltip {...{ getStyle, primaryAxis, datum }} />
      },
    }),
    []
  )

  const getSeriesStyle = React.useCallback(
    () => ({
      transition: "all .5s ease",
    }),
    []
  )
  const getDatumStyle = React.useCallback(
    () => ({
      transition: "all .5s ease",
    }),
    []
  )

  return (
    <div
      css={`
        margin: 20px;
      `}
    >
      <div
        style={{
          height: "450px",
        }}
      >
        <Chart
          data={data}
          axes={axes}
          getLabel={getLabel}
          tooltip={tooltip}
          getSeriesStyle={getSeriesStyle}
          getDatumStyle={getDatumStyle}
        />
      </div>
    </div>
  )
}

export default LineChart
