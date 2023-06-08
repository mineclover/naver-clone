import React, { useEffect, useState } from "react"
import Dark from "@@/atoms/DarkIcon"
import styled from "@emotion/styled"

type Props = {}

const DarkMode = (props: Props) => {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    if (dark) {
      const htmlElement = document.querySelector("html")
      htmlElement!.setAttribute("data-dark", "false")
    } else {
      const htmlElement = document.querySelector("html")
      htmlElement!.setAttribute("data-dark", "true")
    }
  }, [dark])

  return (
    <Button onClick={() => setDark(!dark)}>
      <Dark />
    </Button>
  )
}

export default DarkMode

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: var(--color-option-bg);
  box-shadow: 0 0 0 1px #dadcdf, 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 50%;
`
