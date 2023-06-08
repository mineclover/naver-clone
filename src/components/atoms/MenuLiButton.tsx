import React from "react"
import styled from "@emotion/styled"
import Icon, { IconSet } from "./MenuLiButtonIcon"

type Props = {
  iconSet: IconSet
  name: string
  size: string
  link: string
}

const MenuButton = ({ iconSet, name, size, link }: Props) => {
  return (
    <Li size={size}>
      <Icon iconSet={iconSet} />
      <Anchor href={link}>{name}</Anchor>
    </Li>
  )
}

export default MenuButton

const Li = styled.li<Partial<Props>>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 8px;
  height: 46px;
  width: ${(props) => props.size || "auto"};
  margin: 0;
  padding: 0;
  list-style: none;

  cursor: pointer;
  a {
    white-space: nowrap;
    :hover {
      text-decoration: underline;
    }
  }
`

const Anchor = styled.a`
  position: absolute;
  display: block;
  padding: 9px 0;
  padding-left: 36px;

  width: calc(100% - 36px);
  margin: 0;
  line-height: 28px;
  color: var(--color-caption-1);
  font-size: var(--text-14px);
  text-decoration: none;
`
