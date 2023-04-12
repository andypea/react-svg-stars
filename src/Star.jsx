import React from "react";
import PropTypes from "prop-types";

/**
 * Render an SVG star
 */
export const Star = ({
  numPoints,
  radius,
  radiusRatio,
  className,
  fill,
  stroke,
  rotation,
  cx,
  cy,
  ...props
}) => {
  let pathString = "";

  if (numPoints >= 2) {
    const theta = Math.PI / numPoints;

    const angularPoints = Array.from(Array(2 * numPoints), (_, i) => ({
      radius: i % 2 === 0 ? radius : radiusRatio * radius,
      angle: i * theta + rotation - Math.PI / 2,
    }));

    const cartesianPoints = angularPoints.map((p) => {
      const cp = angularToCartesian(p.radius, p.angle);
      return { x: cp.x + cx, y: cp.y + cy };
    });

    pathString = pointsToPath(cartesianPoints);
  }

  return (
    <path
      d={pathString}
      fill={fill}
      stroke={stroke}
      className={className}
      {...props}
    />
  );
};

Star.propTypes = {
  /**
   * The number of points.
   */
  numPoints: PropTypes.number,

  /**
   * At what radius should the stars outer points be placed?
   */
  radius: PropTypes.number,

  /**
   * The ratio between the radius of the inner points and the outer points.
   */
  radiusRatio: PropTypes.number,

  /**
   * The className to assign to the star path.
   */
  className: PropTypes.string,

  /**
   * The fill colour.
   */
  fill: PropTypes.string,

  /**
   * The stroke colour.
   */
  stroke: PropTypes.string,

  /**
   * How much to rotate the star (clockwise in radians).
   */
  rotation: PropTypes.number,

  /**
   * The center of the circle (x coordinate).
   */
  cx: PropTypes.number,

  /**
   * The center of the circle (x coordinate).
   */
  cy: PropTypes.number,
};

Star.defaultProps = {
  numPoints: 5,
  radius: 10,
  radiusRatio: 0.5,
  className: "star",
  fill: "yellow",
  stroke: "black",
  rotation: 0,
  cx: 0,
  cy: 0,
};

const angularToCartesian = (radius, angle) => {
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
};

const pointsToPath = (points) => {
  // Move to the first point
  const pathHeadString = `M ${points[0].x}, ${points[0].y}`;
  // Draw a line through each other point in sequence.
  const pathMiddleString = points
    .slice(1, points.length)
    .map(({ x, y }) => `L ${x}, ${y}`)
    .join(" ");
  // Close the path
  const pathTailString = "Z";

  return "".concat(pathHeadString, " ", pathMiddleString, " ", pathTailString);
};
