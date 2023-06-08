import type { Meta, StoryObj } from "@storybook/react"

import TopNavMenu from "./TopNavMenu"

import "@/tokens/light.variables.css"
import "@/index.css"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TopNavMenu> = {
  title: "components/clusters/TopNav",
  component: TopNavMenu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export default meta
type Story = StoryObj<typeof TopNavMenu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
}
