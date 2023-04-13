/**
 * @jest-environment jsdom
 */

import React from "react";
import { Star } from "../src/Star.jsx";
import { toHaveAttribute } from "@testing-library/jest-dom";
import { render, screen, getByTestId } from "@testing-library/react";

test("default star has the correct number of points", () => {
  render(
    <svg>
      <Star data-testid="star" />
    </svg>
  );

  const star = screen.getByTestId("star");

  expect(star).toHaveAttribute("d");
  const pathString = star.getAttribute("d");
  expect(pathString[0]).toBe("M");
  expect(pathString.match(/L/g).length).toBe(10 - 1);
});

test("ten point star has the correct number of points", () => {
  render(
    <svg>
      <Star data-testid="star" numPoints={10} />
    </svg>
  );

  const star = screen.getByTestId("star");

  expect(star).toHaveAttribute("d");
  const pathString = star.getAttribute("d");
  expect(pathString[0]).toBe("M");
  expect(pathString.match(/L/g).length).toBe(20 - 1);
});

test("one point star has an empty path", () => {
  render(
    <svg>
      <Star data-testid="star" numPoints={1} />
    </svg>
  );

  const star = screen.getByTestId("star");

  expect(star).toHaveAttribute("d");
  const pathString = star.getAttribute("d");
  expect(pathString).toBe("");
});

test("blue star is blue", () => {
  render(
    <svg>
      <Star data-testid="star" fill="blue" />
    </svg>
  );

  const star = screen.getByTestId("star");

  expect(star).toHaveAttribute("fill");
  expect(star.getAttribute("fill")).toBe("blue");
});

test("yellow stroked star has a yellow stroke", () => {
  render(
    <svg>
      <Star data-testid="star" stroke="yellow" />
    </svg>
  );

  const star = screen.getByTestId("star");

  expect(star).toHaveAttribute("stroke");
  expect(star.getAttribute("stroke")).toBe("yellow");
});
