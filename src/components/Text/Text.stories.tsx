import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Loren Ipsum',
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg'],


      }
    }
  },


} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text With Paragraph! "p"</p>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  },
}