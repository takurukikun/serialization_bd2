import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  color: var(--theme-color);
  padding: 76px 40px 0px 40px;
  height: 100%;
  margin-left: 0;
  overflow: auto;
  background-color: var(--theme-bg-color);
  &-header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border-radius: 14px;
    padding: 20px 40px;
    @media screen and (max-width: 415px) {
      padding: 20px;
    }
  }
  &.overlay {
    pointer-events: none;
    transition: 0.3s;
    background-color: var(--overlay-bg);
  }
`
