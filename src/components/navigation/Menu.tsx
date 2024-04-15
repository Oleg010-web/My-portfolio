import styled from "styled-components"
import { LinkItem } from "../LinkItem"

type MenuPropsType = {
  MenuItems: Array<string>
}

export const Menu = (props: MenuPropsType) => {
  return <StyledMenu>
    <ul>
      {props.MenuItems.map((el, index)=>{
        return <ListItem key={index}>
        <LinkItem href='/'>{el}</LinkItem>
      </ListItem>
      })}
    </ul>
  </StyledMenu>



}


const StyledMenu = styled.nav`
  
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    border: 1px solid red;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`
  
`
