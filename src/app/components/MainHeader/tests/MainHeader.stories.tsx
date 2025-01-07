import type { Meta, StoryObj } from '@storybook/react'

import MainHeader from '../MainHeader'

const meta = {
    title: 'Main/Header',
    component: MainHeader,
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
} satisfies Meta<typeof MainHeader>

export default meta

type Story = StoryObj<typeof meta>

export const LightTheme: Story = {
    globals: {
        selectedTheme: 'light',
        backgrounds: 'light',
    },
}

export const DarkTheme: Story = {
    globals: {
        selectedTheme: 'dark',
        backgrounds: 'dark',
    },
}
