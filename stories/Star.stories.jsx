import React from "react";
import { Star } from "../src/Star";

const meta = {
  title: "Library/Star",
  component: Star,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
    stroke: { control: "color" },
    rotation: {
      control: {
        type: "range",
        min: -7,
        max: 7,
        step: 0.01,
      },
    },
    radiusRatio: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    numPoints: {
      control: {
        type: "number",
        min: 2,
      },
    },
  },
  args: { ...Star.defaultProps, cx: 75, cy: 75, radius: 30 },
  render: (args) => (
    <svg>
      <Star {...args} />
    </svg>
  ),
};

export default meta;

export const Default = {
  args: {
    fill: "yellow",
  },
};

export const Orange = {
  args: {
    fill: "orange",
  },
};

export const ThreePoint = {
  args: {
    numPoints: 3,
  },
};

export const TwelvePoint = {
  args: {
    numPoints: 12,
  },
};

export const Small = {
  args: {
    radius: 10,
  },
};

export const Spikey = {
  args: {
    radiusRatio: 0.1,
  },
};

export const Round = {
  args: {
    radiusRatio: 0.9,
  },
};

export const Glowing = {
  args: {
    stroke: "orange",
  },
};

export const Rotated = {
  args: {
    rotation: Math.PI / 2,
  },
};

export const Moved = {
  args: {
    cx: 30,
    cy: 30,
  },
};

export const SouthernCross = (args) => (
  <svg>
    <Star radius={10} cx={50} cy={15} numPoints={7} />
    <Star radius={10} cx={15} cy={50} numPoints={7} />
    <Star radius={10} cx={85} cy={40} numPoints={7} />
    <Star radius={10} cx={49} cy={105} numPoints={7} />

    <Star radius={5} cx={70} cy={60} numPoints={7} />
  </svg>
);
