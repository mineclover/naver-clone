import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"

export type Props = {
  iconSet: IconSet
}

export type IconSet = {
  css: string
  size: string
}

const TopLinkButton = ({ iconSet }: Props) => {
  // 상태를 전달하지 않아도 됨으로 setResponse를 생략

  return <Icon css={iconSet.css} size={iconSet.size} />
}

export default TopLinkButton

type Icon = IconSet & Props

const Icon = styled.i<Partial<IconSet>>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  margin: -1px -1px;

  // before, after를 같이 넣는 것의 장점
  // 부모 사이즈를 자유롭게 설정할 수 있다
  ::before {
    content: "";
    margin: -1px 0 0 -1px;
    background: var(--small-bg);
    width: 30px;
    height: 30px;
  }
  ::after {
    content: "";
    position: absolute;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    background: ${(props) => props.css};
  }
`

// 호버시에 안내 텍스트가 나온다
// 클릭시에는 해당 페이지로 이동한다
// 사용된 접근성 텍스트 생성 방법 https://mulder21c.io/screen-hide-text/
