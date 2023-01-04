import { ComponentProps } from 'react'
import { SliderContainer, SliderTrack, SliderThumb } from './styles'

export function Slider() {
  return (
    <SliderContainer defaultValue={[50]} max={100} step={1} aria-label="Volume">
      <SliderTrack />

      <SliderThumb />
    </SliderContainer>
  )
}

export interface SliderProps extends ComponentProps<typeof SliderContainer> {}

Slider.displayname = 'Slider'
