import { SliderContainer, SliderTrack, SliderThumb } from './styles'

export interface SliderProps {
  size: number
  currentSlide?: number
}

export function Slider({ size, currentSlide = 1 }: SliderProps) {
  return (
    <SliderContainer max={size} step={currentSlide} aria-label="Volume">
      <SliderTrack />

      <SliderThumb />
    </SliderContainer>
  )
}

Slider.displayName = 'Slider'
