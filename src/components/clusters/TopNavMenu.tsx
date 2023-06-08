import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import TopNav from "@@/modules/TopNav"
import ExtendMenu from "@@/organisms/ExtendMenu"

type Props = {}

const App = (Props: Props) => {
  const [trigger, setTrigger] = useState<Boolean>(false)

  return (
    <ExtendArea className={trigger ? "active" : ""}>
      <TopNav setResponse={setTrigger} />
      {trigger ? <ExtendMenu /> : ""}
    </ExtendArea>
  )
}

export default App

const ExtendArea = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 0;
  margin: 0;
  overflow: hidden;

  &.active {
    padding: 20px 15px 0 16px;
    margin: -20px -15px 0 -16px;
    gap: 19px;
    width: fit-content;

    box-shadow: 0px 4px 8px rgba(0 0, 0, 0.3), 0px 0px 1px #e3e5e8;
    border-radius: var(--radius-r8);
    background-color: var(--color-search-bg);
  }
`
