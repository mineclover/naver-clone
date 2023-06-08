import type { Meta, StoryObj } from "@storybook/react"

import MenuLiButton from "./MenuLiButton"

import "@/tokens/light.variables.css"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof MenuLiButton> = {
  title: "01_atoms/MenuLiButton",
  component: MenuLiButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export default meta
type Story = StoryObj<typeof MenuLiButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    iconSet: {
      css: "var(--small-pay)",
      size: "28px",
    },
    name: "네이버페이",
  },
}
