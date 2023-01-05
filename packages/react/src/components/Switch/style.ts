import * as Switch from '@radix-ui/react-switch'
import { styled } from '../../styles'

export const SwitchContainer = styled(Switch.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$gray500',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: '0 2px 10px $gray500',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px $black` },
  '&[data-state="checked"]': { backgroundColor: '$black' },
})

export const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: '$white',
  borderRadius: '$full',
  boxShadow: '0 2px 2px $gray300',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
})

export const Flex = styled('div', { display: 'flex' })

export const Label = styled('label', {
  color: '$white',
  fontSize: 15,
  lineHeight: 1,
})
