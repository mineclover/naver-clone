import type { Meta, StoryObj } from "@storybook/react"

import ExtendMenuButtons from "./ExtendMenuButtons"

import "@/tokens/light.variables.css"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ExtendMenuButtons> = {
  title: "02_modules/ExtendMemuButtons",
  component: ExtendMenuButtons,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ExtendMenuButtons>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
}
