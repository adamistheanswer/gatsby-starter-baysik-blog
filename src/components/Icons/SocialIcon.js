import React, { useState } from "react"
import { SocialMediaIconsReact } from "social-media-icons-react"

export const SocialIcon = ({socialIcon, link, iconSize}) => {
  const [isShown, setIsShown] = useState("var(--logo)")
  return (
    <div
      onMouseEnter={() => setIsShown("var(--textLink)")}
      onMouseLeave={() => setIsShown("var(--logo)")}
      role="button"
      styling="link"
      tabIndex={0}
    >
      <SocialMediaIconsReact
        borderColor="var(--logo)"
        borderWidth="2"
        borderStyle="solid"
        icon={socialIcon}
        iconColor={isShown}
        backgroundColor="rgba(0,0,0,0)"
        iconSize={iconSize}
        roundness="100%"
        url={link}
        size="30"
      />
    </div>
  )
}
