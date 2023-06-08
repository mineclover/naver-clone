import React from "react"
import styled from "@emotion/styled"
import TopNavMenu from "../clusters/TopNavMenu"

type Props = {}

const App = (props: Props) => {
  return (
    <Warp>
      <Header>
        <SearchBar />
        <TopNavMenu />
      </Header>
      <Main>
        <MainLeft>
          <Skeleton />
        </MainLeft>
        <MainRight>
          <Skeleton />
        </MainRight>
      </Main>
      <Footer>
        <Skeleton />
      </Footer>
    </Warp>
  )
}

export default App

const SearchBar = styled.div`
  width: var(--size-search-width);
  height: var(--size-search-height);
  background-color: var(--color-search-bg);
  border-width: 1px;
  border-color: var(--color-naver);

  border-radius: var(--radius-circle);
  border-style: solid;
  :hover {
    background-color: var(--color-search-bg);
    border-color: var(--color-naver);
    border-radius: var(--radius-circle);
    box-shadow: var(--shodow-search-hover);

    border-style: solid;
  }
`

const Warp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: relative;
  width: 1920px;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: var(--size-header-width);
  height: var(--size-header-height);
  padding-top: var(--gap-header-top);
  padding-bottom: var(--gap-header-bottom);
  gap: var(--gap-header-gap);
`

const Main = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px;
  gap: var(--gap-row);
  width: 1280px;
  height: fit-content;
`

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: var(--color-border-divider);
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
const MainRight = styled.div`
  width: var(--main-right-wedth);
  height: var(--main-right-wedth);
  gap: var(--gap-column);
`

const MainLeft = styled.div`
  width: var(--main-left-wedth);
  height: var(--main-left-wedth);
  gap: var(--gap-column);
`
