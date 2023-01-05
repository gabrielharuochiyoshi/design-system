import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, ButtonProps } from '@haruo-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button/Button Select',
  component: Button,
  args: {
    children: 'Enviar',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger'],
      control: 'select',
    },
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Botão',
    css: {
      width: '$4',
    },
  },

  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '$gray100',
            width: '$30',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
    children: 'Cancelar',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Proximo Passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
