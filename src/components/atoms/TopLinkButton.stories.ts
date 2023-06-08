import type { Meta, StoryObj } from "@storybook/react"

import TopLinkButton from "./TopLinkButton"

import "@/tokens/light.variables.css"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TopLinkButton> = {
  title: "components/atoms/TopLinkButton",
  component: TopLinkButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    iconCSS: {
      description: "Icon set for the button",
      control: {
        type: "select",
      },
      options: [
        "webtoon",
        "map",
        "house",
        "stock",
        "news",
        "shopping",
        "blog",
        "cafe",
        "mail",
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof TopLinkButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    iconCSS: "mail",
  },
}
