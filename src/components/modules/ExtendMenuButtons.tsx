import React from "react"
import MenuLi from "@/components/atoms/MenuLiButton"
import styled from "@emotion/styled"

import settings from "@/settings.json"
import siteMap from "@/siteMap.json"
const lang = settings.lang as "ko" | "en"

type Props = {}

const i18n = siteMap.Extend.i18n
const link = siteMap.Extend.link

const arr: (keyof typeof i18n)[] = [
  "weather",
  "game",
  "pay",
  "tv",
  "book",
  "band",
  "dict",
  "live",
  "sport",
  "series",
  "novel",
  "kin",
  "calendar",
  "happybin",
  "mybox",
  "vibe",
]

const ExtendMenuButtons = (props: Props) => {
  const lis = arr.map((item) => {
    const iconSet = {
      css: `var(--small-${item})`,
      size: "28px",
    }
    return (
      <MenuLi
        key={item}
        iconSet={iconSet}
        name={i18n[item][lang]}
        size="165px"
        link={link[item][lang]}
      />
    )
  })

  return (
    <div>
      <Ul>{lis}</Ul>
    </div>
  )
}

export default ExtendMenuButtons

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 660px;
  flex-wrap: wrap;
  gap: 0;
  padding: 0;
  margin: 0;
`
