import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import TopNav from "@@/modules/TopNav"
import ExtendMenu from "@@/organisms/ExtendMenu"

type Props = {
  top: number
}

const App = ({ top }: Props) => {
  const [trigger, setTrigger] = useState<Boolean>(false)

  return (
    <ExtendArea top={top} className={trigger ? "active" : ""}>
      <TopNav setResponse={setTrigger} />
      {trigger ? <ExtendMenu /> : ""}
    </ExtendArea>
  )
}

export default App

const ExtendArea = styled.article<Props>`
  z-index: 100;
  position: absolute;
  top: ${(props) => (props.top ? props.top : 0)}px;
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

    box-shadow: var(--shadow-nav);
    outline: 1px solid var(--color-search-border);
    border-radius: var(--radius-r8);
    background-color: var(--color-search-bg);
  }
`
