import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--theme-bg-color);
  height: 100vh;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  font-size: 15px;
  font-weight: 500;

  flex-grow: 1;
  overflow: hidden;
`
