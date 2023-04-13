export const angularToCartesian = (radius, angle) => {
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
};

export const pointsToPath = (points) => {
  if (points.length < 2) {
    return "";
  }
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
