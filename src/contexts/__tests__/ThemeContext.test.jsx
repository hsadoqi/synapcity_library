import { render, screen, act, waitFor } from '@testing-library/react'
import { ThemeProvider, ThemeContext } from '@/contexts/ThemeContext'
import { useContext } from 'react'
import {
    mockLocalStorage,
    createMockLocalStorage,
} from '../../__mocks__/localStorage'

const TestComponent = (isDarkMode = false) => {
    const { theme, setTheme } = useContext(ThemeContext) || {}
    if (!theme || !setTheme) return null

    return (
        <button
            data-testid="theme-toggle"
            data-testtheme={theme}
            onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
        >
            {isDarkMode ? 'light' : 'dark'}
        </button>
    )
}

describe('ThemeProvider', () => {
    let restoreLocalStorage

    beforeAll(() => {
        window.matchMedia = jest.fn().mockImplementation((query) => ({
            matches: query === '(prefers-color-scheme: dark)',
            addListener: jest.fn(),
            removeListener: jest.fn(),
        }))
    })

    beforeEach(() => {
        restoreLocalStorage = mockLocalStorage(createMockLocalStorage())
        localStorage.clear()
    })

    afterEach(() => {
        restoreLocalStorage()
        jest.clearAllMocks()
    })

    it('renders without crashing and provides context', () => {
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>,
        )

        expect(screen.getByText('light')).toBeInTheDocument()
    })

    it('defaults to the system theme when no savedTheme exists', async () => {
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>,
        )

        await waitFor(() => {
            expect(document.documentElement.classList.contains('dark')).toBe(
                true,
            )
            expect(localStorage.getItem('theme')).toBe('dark')
            expect(screen.getByText('light')).toBeInTheDocument()
        })
    })

    it('sets and provides the correct theme from context', async () => {
        render(
            <ThemeProvider>
                <TestComponent isDarkMode={false} />
            </ThemeProvider>,
        )

        const button = screen.getByTestId('theme-toggle')

        await act(async () => button.click())

        await waitFor(() => {
            expect(localStorage.getItem('theme')).toBe('light')
        })
    })

    it('sets the theme from localStorage if available', async () => {
        localStorage.setItem('theme', 'dark')

        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>,
        )

        await waitFor(() =>
            expect(screen.getByText('light')).toBeInTheDocument(),
        )
    })
})
