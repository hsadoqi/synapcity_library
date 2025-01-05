import '../src/styles/globals.css'
import '../src/styles/shadcn-ui.css'

const preview = {
    tags: ['autodocs'],
    parameters: {
        nextjs: {
            appDirectory: true,
        },
        docs: {
            autodocs: true,
        },
    },
    globals: {
        selectedTheme: 'light',
        backgrounds: 'light',
    },
    initialGlobals: {
        selectedTheme: 'light',
        backgrounds: 'light',
    },
}

export default preview
