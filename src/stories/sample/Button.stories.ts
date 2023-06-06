import type { Meta, StoryObj } from "@storybook/react"

import Button from "@@/atoms/atoms.smaple"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "CodeSample/Buttons/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {
      control: "select",
      options: ["email", "phone", "mail", "hello", "world"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    text: "email",
  },
}
