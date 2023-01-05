import { ComponentProps, useState } from 'react'
import { Flex, Label, SwitchContainer, SwitchThumb } from './style'

export const Switch = () => (
  <form>
    <Flex css={{ alignItems: 'center' }}>
      <Label htmlFor="airplane-mode" css={{ paddingRight: 15 }}>
        Switch
      </Label>
      <SwitchContainer id="airplane-mode">
        <SwitchThumb />
      </SwitchContainer>
    </Flex>
  </form>
)
