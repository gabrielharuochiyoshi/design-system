import type { StoryObj, Meta } from '@storybook/react'
import { Box, Slider, SliderProps } from '@haruo-ui/react'

export default {
  title: 'Surfaces/Slider',
  component: Slider,
  args: {
    size: 4,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            backgroundColor: '$white',
            width: 'max-content',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<SliderProps>

export const Primary: StoryObj<SliderProps> = {
  args: {},
}
