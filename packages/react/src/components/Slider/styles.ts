import * as Slider from '@radix-ui/react-slider'
import { styled } from '../../styles'

export const SliderContainer = styled(Slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 200,

  '&[data-orientation="horizontal"]': {
    height: 20,
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 20,
    height: 100,
  },
})

export const SliderTrack = styled(Slider.Track, {
  backgroundColor: '$green150',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '$full',
  cursor: 'pointer',

  '&[data-orientation="horizontal"]': { height: '$2' },
  '&[data-orientation="vertical"]': { width: '$2' },

  '&:hover': {
    backgroundColor: '$green250',
  },
})

export const SliderThumb = styled(Slider.Thumb, {
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px $green910`,
  borderRadius: 10,
  border: '2px solid $green550',

  '&:hover': {
    backgroundColor: '$white',
    cursor: 'pointer',
    border: '2px solid $green850',
  },
  '&:focus': { outline: 'none', boxShadow: `0 0 0 5px $green300` },
})
