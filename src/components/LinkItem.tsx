import styled from "styled-components";
import { theme } from "../styles/Theme";

export const LinkItem = styled.a`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10xp;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: -5px;
    left: 0px;
    right: 0px;
    z-index: -1;
  }

  &:hover{
    &::before{
      height: 10px;
    }
  }
`