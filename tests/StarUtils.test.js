import { angularToCartesian, pointsToPath } from "../src/StarUtils.js";

test("angularToCartesian correct for zero radians", () => {
  const angularPoint = { radius: 42, angle: 0 };
  const cartesianPoint = angularToCartesian(
    angularPoint.radius,
    angularPoint.angle
  );

  expect(cartesianPoint.x).toBeCloseTo(angularPoint.radius);
  expect(cartesianPoint.y).toBeCloseTo(0);
});

test("angularToCartesian correct for pi/2 radians", () => {
  const angularPoint = { radius: 42, angle: Math.PI / 2 };
  const cartesianPoint = angularToCartesian(
    angularPoint.radius,
    angularPoint.angle
  );

  expect(cartesianPoint.x).toBeCloseTo(0);
  expect(cartesianPoint.y).toBeCloseTo(angularPoint.radius);
});

test("angularToCartesian correct for pi radians", () => {
  const angularPoint = { radius: 42, angle: Math.PI };
  const cartesianPoint = angularToCartesian(
    angularPoint.radius,
    angularPoint.angle
  );

  expect(cartesianPoint.x).toBeCloseTo(-angularPoint.radius);
  expect(cartesianPoint.y).toBeCloseTo(0);
});

test("angularToCartesian correct for -pi/2 radians", () => {
  const angularPoint = { radius: 42, angle: -Math.PI / 2 };
  const cartesianPoint = angularToCartesian(
    angularPoint.radius,
    angularPoint.angle
  );

  expect(cartesianPoint.x).toBeCloseTo(0);
  expect(cartesianPoint.y).toBeCloseTo(-angularPoint.radius);
});

test("pointsToPath no points results in empty path", () => {
  const points = [];
  expect(pointsToPath(points)).toBe("");
});

test("pointsToPath two points is correct", () => {
  const points = [
    { x: 0, y: 1 },
    { x: 2, y: 3 },
  ];
  expect(pointsToPath(points)).toBe("M 0, 1 L 2, 3 Z");
});

test("pointsToPath triangle is correct", () => {
  const points = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0.5, y: 1 },
  ];
  expect(pointsToPath(points)).toBe("M 0, 0 L 1, 0 L 0.5, 1 Z");
});

test("pointsToPath square is correct", () => {
  const points = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 0, y: 1 },
  ];
  expect(pointsToPath(points)).toBe("M 0, 0 L 1, 0 L 1, 1 L 0, 1 Z");
});
