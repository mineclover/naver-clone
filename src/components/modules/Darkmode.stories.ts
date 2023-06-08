import type { Meta, StoryObj } from "@storybook/react"

import DarkMode from "./DarkMode"

import "@/tokens/light.variables.css"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DarkMode> = {
  title: "02-modules/DarkMode",
  component: DarkMode,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export default meta
type Story = StoryObj<typeof DarkMode>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
}
