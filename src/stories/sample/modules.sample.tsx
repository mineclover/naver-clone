import { useState, useEffect } from "react"
import Button from "./atoms.sample"
import Hello from "./result.sample"

type Props = {
  texts: string[]
  setResponse?: React.Dispatch<React.SetStateAction<any>>
  Result?: (Props: any) => JSX.Element
}

/**
 * Result로 넘어가는 리턴 타입을 적어주면 좋다
 * @result text: string[]
 */
const Buttons = ({
  texts = ["a", "b", "c"],
  setResponse,
  Result = Hello,
}: Props) => {
  // result 실행용
  const [trigger, setTrigger] = useState<Boolean>(false)
  // 하위 컴포넌트에서 받아온 결과값
  const [res, setRes] = useState<string>("")
  // 컴포넌트의 결과를 모아둔 배열
  const [arr, setArr] = useState<string[]>([])
  useEffect(() => {
    setTrigger(true)
    console.log("modules", trigger)
    // 초기 값에 대한 예외 처리
    if (res === "") return
    // 임의의 로직 ( 중복 제거하는 선택된 리스트 관리 코드 넣어둠 )
    const newArr = [...arr, res]
    setArr(newArr.filter((item, index) => newArr.indexOf(item) === index))
    // 결과값을 상위 컴포넌트로 넘겨줌
    if (setResponse) setResponse(trigger)
  }, [res])

  return (
    <div>
      Buttons
      {texts.map((text, index) => (
        <Button
          key={`${text}${index}`}
          text={text}
          setResponse={setRes}
          Result={Hello}
        />
      ))}
      {trigger && Result !== undefined && (
        <Result text={arr} setTrigger={setTrigger} />
      )}
    </div>
  )
}

export default Buttons
