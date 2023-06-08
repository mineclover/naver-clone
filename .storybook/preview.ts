import type { Preview } from "@storybook/react"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: (a, b) =>
        a.title === b.title
          ? 0
          : a.title.localeCompare(b.title, undefined, { numeric: true }),
    },
    staticDirs: ["../public"],
    previewHead: (head) => `
    ${head}
    
<link rel="stylesheet" href="https://unpkg.com/reset-css" />
<link rel="stylesheet" href="/src/index.css" />
<link rel="stylesheet" href="/src/tokens/light.variables.css" />
    
  `,
  },
}

export default preview
