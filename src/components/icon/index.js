import React from "react"

const Icon = props => {
  const styles = {
    svg: {
      display: "inline-block",
      verticalAlign: "middle",
    },
    path: {
      fill: props.color,
    },
  }

  const drawPath = !Array.isArray(props.icon.draw) ? (
    <path style={styles.path} d={props.icon}></path>
  ) : (
    props.icon.draw.map((el, i) => (
      <path key={`path` + i} fill={el.fill} d={el.path}></path>
    ))
  )
  const drawCircle = !Array.isArray(props.icon.draw) ? (
    <path style={styles.path} d={props.icon}></path>
  ) : (
    props.icon.draw.map((el, i) => (
      <circle
        key={`circle` + i}
        fill={el.fill}
        cx={el.cx}
        cy={el.cy}
        r={el.r}
      ></circle>
    ))
  )

  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox={
        Object.keys(props.icon.param).length === 0
          ? props.viewbox
          : props.icon.param.viewbox
      }
    >
      {drawPath}
      {!drawCircle[0].props.cx ? null : drawCircle}
    </svg>
  )
}

Icon.defaultProps = {
  size: 32,
  color: "#12c3cc",
  viewbox: "0 0 128 128",
}

export default Icon
