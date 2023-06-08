import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"

export type Props = {
  // setting: IconSet
  // setResponse?: React.Dispatch<React.SetStateAction<string>>
  iconCSS: IconCSS
}

export type IconCSS =
  | "webtoon"
  | "map"
  | "house"
  | "stock"
  | "news"
  | "shopping"
  | "blog"
  | "cafe"
  | "mail"
export type IconSet = {
  link: string
  text: string
  size: string
}

const storage = {
  webtoon: {
    link: "",
    text: "웹툰",
    size: "44px",
    css: "--icon-webtoon",
  },
  map: {
    link: "",
    text: "지도",
    size: "48px",
    css: "--icon-map",
  },
  house: {
    link: "",
    text: "부동산",
    size: "44px",
    css: "--icon-house",
  },
  stock: {
    link: "",
    text: "증권",
    size: "44px",
    css: "--icon-stock",
  },
  news: {
    link: "",
    text: "뉴스",
    size: "44px",
    css: "--icon-news",
  },
  shopping: {
    link: "",
    text: "쇼핑",
    size: "44px",
    css: "--icon-shopping",
  },
  blog: {
    link: "",
    text: "블로그",
    size: "44px",
    css: "--icon-blog",
  },
  cafe: {
    link: "",
    text: "카페",
    size: "44px",
    css: "--icon-cafe",
  },
  mail: {
    link: "",
    text: "메일",
    size: "44px",
    css: "--icon-mail",
  },
}

const iconCSS = {}

const TopLinkButton = ({ iconCSS }: Props) => {
  const [hover, setHover] = useState<Boolean>(false)

  // 상태를 전달하지 않아도 됨으로 setResponse를 생략

  return (
    <IconBox>
      <LinkAnchor
        href={storage[iconCSS].link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <HideText>{storage[iconCSS].text}</HideText>
        <Icon size={storage[iconCSS].size} iconCSS={iconCSS}></Icon>
      </LinkAnchor>
    </IconBox>
  )
}

export default TopLinkButton

const IconBox = styled.div`
  width: 58px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
`

const HideText = styled.span`
  border: 0;
  position: absolute;
  z-index: -1;
  width: 1px;
  height: 1px;

  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
`
const LinkAnchor = styled.a<Partial<IconSet>>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 54px;
  height: 54px;
  background: var(--icon-bg);
  flex-shrink: 0;
  flex-grow: 0;

  :hover {
    background: var(--icon-bg-hover);
    position: relative;

    width: 58px;
    height: 58px;

    flex-shrink: 0;
    flex-grow: 0;
  }
`

type Icon = IconSet & Props

const Icon = styled.i<Partial<Icon>>`
  display: block;
  position: relative;
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  background: var(
    ${(props) =>
      props.iconCSS ? storage[props.iconCSS].css : "--icon-webtoon"}
  );
`

// 호버시에 안내 텍스트가 나온다
// 클릭시에는 해당 페이지로 이동한다
// 사용된 접근성 텍스트 생성 방법 https://mulder21c.io/screen-hide-text/
