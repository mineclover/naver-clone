import React, { useEffect } from "react"

type Props = {
  text: string | string[]
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

const hello = ({ text, setTrigger }: Props) => {
  useEffect(() => {
    console.log("result", text)
    if (setTrigger) setTrigger(false)
  }, [])

  return <></>
}

export default hello
