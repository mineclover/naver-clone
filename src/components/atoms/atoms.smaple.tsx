import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"

type Props = {
  setResponse?: React.Dispatch<React.SetStateAction<any>>
  // 결과 성공 여부를 반환하는 함수
  Result?: (Props: any) => JSX.Element
  // 결과를 실행하는 함수
  text: string
  // 컴포넌트에 필요한 나머지
}

const App = ({ text, setResponse, Result }: Props) => {
  const [trigger, setTrigger] = useState<Boolean>(false)
  useEffect(() => {
    if (setResponse) {
      if (trigger === true) {
        setResponse(text)
      }
    }
  }, [trigger])
  return (
    <>
      <Button onClick={() => setTrigger(true)}>{text}</Button>
      {trigger && Result !== undefined && (
        <Result text={text} setTrigger={setTrigger} />
      )}
    </>
  )
}

export default App

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #e5e5e5;
`
