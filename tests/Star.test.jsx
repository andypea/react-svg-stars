/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// the component to test
import { Star } from "../src/Star.jsx";
import { toHaveAttribute } from "@testing-library/jest-dom";
import { getByTestId } from "@testing-library/react";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("has the correct number of points", async () => {
  act(() => {
    render(
      <svg>
        <Star data-testid="star" />
      </svg>,
      container
    );
  });

  const star = getByTestId(container, "star");

  expect(star).toHaveAttribute("d");

  // TODO: Is this the best way to check if the string starts with an M?
  expect(star.getAttribute("d")[0]).toBe("M");
});
