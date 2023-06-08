import React from "react"
import styled from "@emotion/styled"

type Props = {}

const Border = (props: Props) => {
  return (
    <Warp>
      <Skeleton />
    </Warp>
  )
}

export default Border

const Warp = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  border: 1px solid #e5e5e5;
  background-color: red;
`

const Box = styled.div`
  width: 100%;
  height: 100%;

  background-color: blue;
`

const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;

  background-color: #e2e2e2;
  display: flex;

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      #e5e5e5 30%,
      #f0f0f0 38%,
      #f0f0f0 40%,
      #e5e5e5 48%
    );
    border-radius: 1rem;
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: load 1s infinite;

    @keyframes load {
      100% {
        background-position: -100% 0;
      }
    }
  }
`
