import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {
            builder: {},
        },
    },
    staticDirs: ['../public'],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
}
export default config
