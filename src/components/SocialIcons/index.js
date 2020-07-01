import React from "react"
import styled from "styled-components"
import { SocialIcon } from "../Icons/SocialIcon"

const SocialIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 7px;
`

const SocialIcons = () => {
  return (
    <SocialIconsWrapper>
      <SocialIcon
        socialIcon={"github"}
        link={"https://github.com/adamistheanswer"}
        iconSize={5}
      />
      <SocialIcon
        socialIcon={"facebook"}
        link={"https://www.facebook.com/adamistheanswer"}
        iconSize={5}
      />
      <SocialIcon
        socialIcon={"instagram"}
        link={"https://instagram.com/adamistheanswer"}
        iconSize={5}
      />
      <SocialIcon
        socialIcon={"linkedin"}
        link={"https://www.linkedin.com/in/adamgrobinson/"}
        iconSize={3}
      />
    </SocialIconsWrapper>
  )
}

export default SocialIcons
