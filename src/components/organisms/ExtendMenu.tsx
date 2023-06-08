import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import ExtendMenuButtons from "../modules/ExtendMenuButtons"
import HeadLink from "../atoms/HeadLink"

type Props = {}

const App = (Props: Props) => {
  const [trigger, setTrigger] = useState<Boolean>(false)

  return (
    <ExtendArea className={trigger ? "active" : ""}>
      <HeadLink />
      <ExtendMenuButtons />
    </ExtendArea>
  )
}

export default App

const ExtendArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;

  padding: 18px 23px 17px 25px;
  margin: 0 -16px 0 -16px;
  gap: 10px;
  border: 0px solid var(--color-border-in);

  background-color: var(--color-login-bg);
  border-color: var(--color-border-in);
  border-top-width: var(--border-width-1px);
`

const Blue = styled.div`
  width: 100%;
  height: 100px;
  background-color: blue;
`
