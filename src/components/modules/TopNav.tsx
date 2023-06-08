import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import TopLink, { IconCSS } from "../atoms/TopLinkButton"
import TopExtend from "../atoms/TopNavExtendButton"
import settings from "@/settings.json"

const lang = settings.lang as "ko" | "en"

type Props = {
  setResponse?: React.Dispatch<React.SetStateAction<Boolean>>
}
const menu: IconCSS[] = [
  "webtoon",
  "map",
  "house",
  "stock",
  "news",
  "shopping",
  "blog",
  "cafe",
  "mail",
]

interface I18n {
  [key: string]: {
    ko: string
    en: string
  }
}

const i18n: I18n = {
  webtoon: {
    ko: "웹툰",
    en: "webtoon",
  },
  map: {
    ko: "지도",
    en: "map",
  },
  house: {
    ko: "부동산",
    en: "house",
  },
  stock: {
    ko: "증권",
    en: "stock",
  },
  news: {
    ko: "뉴스",
    en: "news",
  },
  shopping: {
    ko: "쇼핑",
    en: "shopping",
  },
  blog: {
    ko: "블로그",
    en: "blog",
  },
  cafe: {
    ko: "카페",
    en: "cafe",
  },
  mail: {
    ko: "메일",
    en: "mail",
  },
}

/**
 *
 * @param props
 * @returns
 */
const TopNav = ({ setResponse }: Props) => {
  const [trigger, setTrigger] = useState<Boolean>(false)

  useEffect(() => {
    if (setResponse === undefined) return
    setResponse(trigger)
  }, [trigger])
  const MenuComp = () =>
    menu.map((item, index) => {
      return (
        <NavLi key={`${item},${index}`}>
          <TopLink iconCSS={item} />
          <NavText>{i18n[item][lang]}</NavText>
        </NavLi>
      )
    })

  return (
    <NavUl>
      {MenuComp()}
      <TopExtend setResponse={setTrigger} />
    </NavUl>
  )
}

export default TopNav

const NavUl = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  gap: 4px;

  &.active {
  }
`

const NavText = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;

  text-align: center;
  font-size: var(--text-14px);
  line-height: var(--text-17px);
`

const NavLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 64px;
  height: 75px;
  padding: 0;
  margin: 0;

  flex-shrink: 0;
`
