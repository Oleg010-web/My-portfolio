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
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`

const ListItem = styled.li`
  
`
