import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"

export type Props = {
  // setting: IconSet
  setResponse?: React.Dispatch<React.SetStateAction<Boolean>>
}

const TopLinkButton = ({ setResponse }: Props) => {
  const [hover, setHover] = useState<Boolean>(false)

  useEffect(() => {
    if (setResponse) {
      if (hover === true) {
        setResponse(hover)
      } else {
        setResponse(false)
      }
    }
  }, [hover])

  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <HideText>바로가기 더 보기</HideText>
      <Icon />
    </Button>
  )
}

export default TopLinkButton

const HideText = styled.span`
  border: 0;
  position: absolute;
  z-index: -1;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
`
const Button = styled.button`
  position: relative;
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 64px;
  height: 64px;
  flex-shrink: 0;

  ::before {
    content: "";
    position: absolute;
    width: 54px;
    height: 54px;
    background: var(--icon-bg);
  }
  :hover {
    ::before {
      background: var(--icon-button-hover);
      position: absolute;
      width: 58px;
      height: 58px;
      margin-top: 2px;
    }
  }
`

const Icon = styled.i`
  display: block;
  position: relative;
  width: 44px;
  height: 44px;
  padding: 0;
  margin: 0;
  background: var(--icon-more);
`

// 호버시에 안내 텍스트가 나온다
// 클릭시에는 해당 페이지로 이동한다
// 사용된 접근성 텍스트 생성 방법 https://mulder21c.io/screen-hide-text/
