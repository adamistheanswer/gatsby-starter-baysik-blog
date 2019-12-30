import Typography from "typography"
import gray from "gray-percentage"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"
import verticalRhythm from "compass-vertical-rhythm"

import '../styles/global.css'

const typography = new Typography({
  title: "Fairy Gates",
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: "Work Sans",
      styles: ["600"],
    },
    {
      name: "Quattrocento Sans",
      styles: ["400", "400i", "700"],
    },
  ],
  headerFontFamily: ["Work Sans", "sans-serif"],
  bodyFontFamily: ["Quattrocento Sans", "sans-serif"],
  headerColor: 'var(--headerCol)',
  bodyColor: 'var(--bodyCol)',
  headerWeight: "600",
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor =   'var(--textLink)'
    const vr = verticalRhythm({
      baseFontSize: "17px",
      baseLineHeight: "24.65px",
    })
    return {
      a: {
        color: linkColor,
        textDecoration: "none",
        fontWeight: "bold",
      },
      "a:hover,a:active": {
        textShadow: "none",
        backgroundImage: "none",
        textDecoration: "none",
        color: "var(--headerCol)",
    
      },
      "h1,h2,h3,h4,h5,h6": {
        marginTop: rhythm(1),
        marginBottom: rhythm(0.5),
        textDecoration: "none",
      },
      h4: {
        marginTop: rhythm(0),
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1 / 5),
        borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
        color: gray(35),
        paddingLeft: rhythm(10 / 16),
        fontStyle: "italic",
        marginLeft: 0,
        marginRight: 0,
      },
      "blockquote > :last-child": {
        marginBottom: 0,
      },
      "blockquote cite": {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: "normal",
        fontWeight: options.bodyWeight,
      },
      "blockquote cite:before": {
        content: '"— "',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
          color: gray(41),
          paddingLeft: rhythm(9 / 16),
          fontStyle: "italic",
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
        },
      },
    }
  },
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
