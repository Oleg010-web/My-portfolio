import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"

export const Contacts = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledContactForm>
          <StyledFormField placeholder="name" />
          <StyledFormField placeholder="subject" />
          <StyledFormField as={"textarea"} placeholder="Your message" />
          <Button type="submit">Send message</Button>
        </StyledContactForm>
      </Container>
    </StyledContact>
  )
}

const StyledContact = styled.section`
  
`

const StyledContactForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`

const StyledFormField = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${theme.colors.font};

  &::placeholder{
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible{
    outline: 1px solid  ${theme.colors.borderColor};
  }
`