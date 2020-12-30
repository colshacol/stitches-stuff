import { createStyled } from "@stitches/react"

export type StyledProps = {
  css?: any
  as?: any
}

const theme = {
  colors: {
    $hiContrast: "hsl(206,10%,5%)",
    $loContrast: "white",

    $gray100: "hsl(206,22%,99%)",
    $gray200: "hsl(206,12%,97%)",
    $gray300: "hsl(206,11%,92%)",
    $gray400: "hsl(206,10%,84%)",
    $gray500: "hsl(206,10%,76%)",
    $gray600: "hsl(206,10%,44%)",

    $purple100: "hsl(252,100%,99%)",
    $purple200: "hsl(252,100%,98%)",
    $purple300: "hsl(252,100%,94%)",
    $purple400: "hsl(252,75%,84%)",
    $purple500: "hsl(252,78%,60%)",
    $purple600: "hsl(252,80%,53%)"
  },

  space: {
    $1: "1.6rem",
    $2: "2.0rem",
    $3: "2.4rem",
    $4: "2.8rem",
    $5: "3.2rem",
    $6: "3.6rem"
  },

  sizes: {
    $1: "1.6rem",
    $2: "2.0rem",
    $3: "2.4rem",
    $4: "2.8rem",
    $5: "3.2rem",
    $6: "3.6rem"
  },

  fontSizes: {
    $1: "12px",
    $2: "13px",
    $3: "15px",
    $4: "17px",
    $5: "19px",
    $6: "21px"
  },

  fonts: {
    $system: "system-ui"
  }
}

export const { styled, css } = createStyled({
  tokens: theme,
  utils: {
    marginX: (config) => (
      value: keyof typeof theme["space"] | (string & {})
    ) => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: (config) => (
      value: keyof typeof theme["space"] | (string & {})
    ) => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: (config) => (
      value: keyof typeof theme["space"] | (string & {})
    ) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: (config) => (
      value: keyof typeof theme["space"] | (string & {})
    ) => ({
      paddingTop: value,
      paddingBottom: value
    })
  },
  breakpoints: {
    bp1: (rule) => `@media (min-width: 520px) { ${rule} }`,
    bp2: (rule) => `@media (min-width: 900px) { ${rule} }`
  }
})
