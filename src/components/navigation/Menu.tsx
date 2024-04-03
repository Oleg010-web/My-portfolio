import styled from "styled-components"

type MenuPropsType = {
  MenuItems: Array<string>
}

export const Menu = (props: MenuPropsType) => {
  return <StyledMenu>
    <ul>
      {props.MenuItems.map((el, index)=>{
        return <li key={index}>
        <a href='/'>{el}</a>
      </li>
      })}
    </ul>
  </StyledMenu>



}


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`