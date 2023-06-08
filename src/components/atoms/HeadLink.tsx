import React from "react"
import styled from "@emotion/styled"
import "@/tokens/light.variables.css"
import "@/tokens/dark.variables.css"
import "@/index.css"

type Props = {}

const HeadLink = (props: Props) => {
  return <Anchor>전체 서비스</Anchor>
}

export default HeadLink

const Anchor = styled.a`
  display: inline-block;
  font-size: var(--text-16px);
  line-height: var(--line-height-normal);
  font-weight: var(--weight-bold);
  color: var(--color-body);
  vertical-align: top;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  ::after {
    content: "";
    display: inline-block;
    background: var(--icon-ui-arrow);
    background-repeat: no-repeat;
    width: 8px;
    height: 12px;
    margin: 4px 0 0 8px;
    vertical-align: top;
  }
`
