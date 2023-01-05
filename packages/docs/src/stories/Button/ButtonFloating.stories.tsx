import type { StoryObj, Meta } from '@storybook/react'
import { ButtonFloating, ButtonFloatingProps } from '@haruo-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button/Button Floating',
  component: ButtonFloating,
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
      options: ['sm', 'md', 'lg', 'xl'],
      control: 'inline-radio',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      handles: ['mouseover', 'click .btn'],
    },
  },
} as Meta<ButtonFloatingProps>

export const Primary: StoryObj<ButtonFloatingProps> = {
  args: {
    children: (
      <>
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

export const Disabled: StoryObj<ButtonFloatingProps> = {
  args: {
    children: (
      <>
        <ArrowRight weight="bold" />
      </>
    ),
    disabled: true,
  },
}
