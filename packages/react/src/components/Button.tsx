import { styled } from '../styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  padding: '0 $4',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$orange600',

        '&:not(:disabled):hover': {
          background: '$orange400',
        },

        '&:disabled': {
          backgroundColor: '$orange300',
        },
      },

      secondary: {
        color: '$gray100',
        border: '2px solid $secundary400 ',

        '&:not(:disabled):hover': {
          background: '$secundary400',
        },

        '&:disabled': {
          backgroundColor: '$secundary800',
        },
      },

      danger: {
        color: '$white',
        backgroundColor: '$error500 ',

        '&:not(:disabled):hover': {
          background: '$error300',
        },

        '&:disabled': {
          backgroundColor: '$error200',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = 'Button'
