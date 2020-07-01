import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import {
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  D3Icon,
  PostgresIcon,
  DockerIcon,
  AWSIcon,
  NodeIcon,
  GatsbyIcon,
  PythonIcon,
  VSCodeIcon,
  GitHubIcon,
  IllustratorIcon,
  PhotoshopIcon,
  AppleIcon,
  WindowsIcon,
  LinuxIcon,
} from "../components/Icons"

const IconWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  padding-top: 20px;
  grid-template-columns: repeat(auto-fit, minmax(40px, 40px));
`

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <h2>This is a page example</h2>
      <p>
        Nulla nulla sapien, ultrices vitae erat non, eleifend fermentum ipsum.
        Maecenas eget nisl turpis. Mauris tempus velit dui, vel commodo tortor
        ullamcorper vitae. Etiam condimentum neque in lectus sodales dictum.
        Vivamus vel lorem quis eros auctor dictum eu eu ante. Mauris sagittis
        eget ipsum ut ultrices. Pellentesque iaculis, metus ut blandit posuere,
        tortor arcu lobortis leo, a porta ipsum nisl ac nisl. Nam commodo
        finibus ligula, ac mattis massa efficitur et. Pellentesque sit amet urna
        luctus, maximus sapien eu, dictum felis. Suspendisse feugiat orci ac
        finibus pellentesque. Pellentesque suscipit nec neque non cursus. Nullam
        dictum aliquam odio ut posuere.
        <br />
        <br /> Add more icons from https://konpa.github.io/devicon/
      </p>
      <h4>Technologies:</h4>
      <IconWrapper>
        <JavascriptIcon />
        <TypescriptIcon />
        <ReactIcon />
        <D3Icon />
        <PostgresIcon />
        <DockerIcon />
        <AWSIcon />
        <NodeIcon />
        <GatsbyIcon />
        <PythonIcon />
      </IconWrapper>
      <h4>Tools:</h4>
      <IconWrapper>
        <VSCodeIcon />
        <GitHubIcon />
        <IllustratorIcon />
        <PhotoshopIcon />
        <AppleIcon />
        <WindowsIcon />
        <LinuxIcon />
      </IconWrapper>
      <br />
      <hr />
    </Layout>
  )
}

export default About
