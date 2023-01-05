import { styled } from '../../styles'
import { ComponentProps } from 'react'

export const ButtonFloating = styled('button', {
  all: 'unset',
  borderRadius: '$full',
  padding: '$3 $3',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$green300',
        '&:not(:disabled):hover': {
          background: '$green600',
        },

        '&:disabled': {
          backgroundColor: '$green900',
        },
      },
    },
    size: {
      sm: {
        width: 16,
        height: 16,
        svg: {
          width: '$8',
          height: '$8',
        },
      },
      md: {
        width: 24,
        height: 24,
        svg: {
          width: '$10',
          height: '$10',
        },
      },
      lg: {
        width: 38,
        height: 38,
        svg: {
          width: '$16',
          height: '$16',
        },
      },

      xl: {
        width: 46,
        height: 46,
        svg: {
          width: '$20',
          height: '$20',
        },
      },
    },
  },
})

export interface ButtonFloatingProps
  extends ComponentProps<typeof ButtonFloating> {}

ButtonFloating.displayName = 'ButtonFloating'
