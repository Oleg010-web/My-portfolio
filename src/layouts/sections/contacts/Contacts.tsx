import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"

export const Contacts = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact</SectionTitle>
      <StyledContactForm>
        <StyledFormField  placeholder="name"/>
        <StyledFormField  placeholder="subject"/>
        <StyledFormField  as={"textarea"} placeholder="Your message"/>
        <Button type="submit">Send message</Button>
      </StyledContactForm>
    </StyledContact>
  )
}

const StyledContact = styled.section`
  min-height: 50vh;
  background-color: #136375;
`

const StyledContactForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`

const StyledFormField = styled.input`
  
`