import * as React from "react"

import { Button } from "./components/Button"
import { Box } from "./components/Box"
import { Spacer } from "./components/Spacer"
import * as Text from "./components/Text"
import { InfoBox } from "./components/InfoBox"

import { styled, css } from "./styles/stitches"
import * as Helpers from "./_helpers"

const wrapperBox = css({
  padding: 24
})

const buttonColumn = css({
  height: "250px"
})

export default function App() {
  return (
    <Box direction="column" className={wrapperBox}>
      <Box isFullWidth arrangeX="start">
        <Button>Default</Button>
        <Button kind="primary">Primary</Button>
        <Button disabled kind="primary">
          Primary
        </Button>
      </Box>

      <Spacer />

      <Box isFullWidth arrangeX="end">
        <Button>Default</Button>
        <Button kind="primary">Primary</Button>
        <Button disabled kind="primary">
          Primary
        </Button>
      </Box>

      <Spacer />

      <Box isFullWidth arrangeX="center">
        <Button>Default</Button>
        <Button kind="primary">Primary</Button>
        <Button disabled kind="primary">
          Primary
        </Button>
      </Box>

      <Spacer />

      <Box isFullWidth arrangeX="between">
        <Button>Default</Button>
        <Button kind="primary">Primary</Button>
        <Button disabled kind="primary">
          Primary
        </Button>
      </Box>

      <Spacer />

      <Box isFullWidth arrangeX="around">
        <Button>Default</Button>
        <Button kind="primary">Primary</Button>
        <Button disabled kind="primary">
          Primary
        </Button>
      </Box>

      <Spacer />

      <Box isFullWidth arrangeX="evenly">
        <Button>Default</Button>
        <Button kind="primary">Primary</Button>
        <Button disabled kind="primary">
          Primary
        </Button>
      </Box>

      <Spacer size={6} />

      <Box isFullWidth arrangeX="between">
        <Box direction="column" arrangeX="evenly" className={buttonColumn}>
          <Button>Default</Button>
          <Spacer />
          <Button kind="primary">Primary</Button>
          <Spacer />
          <Button disabled kind="primary">
            Primary
          </Button>
        </Box>

        <Box direction="column" arrangeY="between" className={buttonColumn}>
          <Button>Default</Button>
          <Spacer />
          <Button kind="primary">Primary</Button>
          <Spacer />
          <Button disabled kind="primary">
            Primary
          </Button>
        </Box>

        <Box direction="column" arrangeY="evenly" className={buttonColumn}>
          <Button>Default</Button>
          <Spacer />
          <Button kind="primary">Primary</Button>
          <Spacer />
          <Button disabled kind="primary">
            Primary
          </Button>
        </Box>

        <Box direction="column" arrangeY="around" className={buttonColumn}>
          <Button>Default</Button>
          <Spacer />
          <Button kind="primary">Primary</Button>
          <Spacer />
          <Button disabled kind="primary">
            Primary
          </Button>
        </Box>
      </Box>

      <Spacer height={6} />

      <InfoBox headline="Headline Here">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s.
      </InfoBox>

      <Spacer />

      <InfoBox headline="Headline Here" kind="warning">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s.
      </InfoBox>

      <Spacer />

      <InfoBox headline="Headline Here" kind="danger">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s.
      </InfoBox>

      <Spacer />

      <InfoBox headline="Headline Here" kind="success">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s.
      </InfoBox>

      <Spacer height={6} />

      <Text.H1>Heading 1</Text.H1>
      <Text.H2>Heading 2</Text.H2>
      <Text.H3>Heading 3</Text.H3>
      <Text.H4>Heading 4</Text.H4>
      <Text.H5>Heading 5</Text.H5>
      <Text.Paragraph>Paragraph</Text.Paragraph>
    </Box>
  )
}
