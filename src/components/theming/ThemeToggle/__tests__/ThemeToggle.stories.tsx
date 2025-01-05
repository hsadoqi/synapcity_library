import type { Meta, StoryObj } from '@storybook/react'
import { ThemeToggle } from '../ThemeToggle'
import { ThemeProvider } from '@/contexts'
import { ThemeType } from './utils/renderWithThemeContext'
import { useState } from 'react'

const meta = {
    title: 'Theming/Toggle',
    component: ThemeToggle,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        isDarkMode: { control: 'boolean' },
        toggleDarkMode: () => fn(),
    },
    decorators: [
        (Story, context) => {
            const [theme, setTheme] = useState<ThemeType | string | undefined>(
                context.globals.selectedTheme,
            )

            return (
                <ThemeProvider initialTheme={context.globals.selectedTheme}>
                    <Story
                        initialTheme={theme}
                        toggleDarkMode={() =>
                            context.args.isDarkMode
                                ? setTheme('light')
                                : setTheme('dark')
                        }
                    />
                </ThemeProvider>
            )
        },
    ],
} satisfies Meta<typeof ThemeToggle>

export default meta

type Story = StoryObj<typeof meta>

export const LightTheme: Story = {
    globals: {
        selectedTheme: 'light',
        backgrounds: 'light',
    },
    args: {
        isDarkMode: false,
    },
}

export const DarkTheme: Story = {
    globals: {
        selectedTheme: 'dark',
        backgrounds: 'dark',
    },
    args: {
        isDarkMode: true,
    },
}
