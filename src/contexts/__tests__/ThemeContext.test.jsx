import { render, screen, act, waitFor } from '@testing-library/react'
import { ThemeProvider, ThemeContext } from '@/contexts/ThemeContext'
import { useContext } from 'react'
import { ThemeToggle } from '../../components/theming/ThemeToggle/ThemeToggle'

const mockLocalStorage = (() => {
    let store = {}
    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => {
            store[key] = value
        },
        clear: () => {
            store = {}
        },
    }
})()
global.localStorage = mockLocalStorage

const TestComponent = () => {
    const context = useContext(ThemeContext)
    if (!context) return null
    const { theme, setTheme } = context
    return (
        <button
            data-testid="theme-toggle"
            data-testtheme={theme}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? 'light' : 'dark'}
        </button>
    )
}

describe('ThemeProvider', () => {
    beforeEach(() => {
        mockLocalStorage.clear()
    })

    beforeAll(() => {
        window.matchMedia = jest.fn().mockImplementation((query) => ({
            matches: query === '(prefers-color-scheme: dark)',
            addListener: jest.fn(),
            removeListener: jest.fn(),
        }))
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
        mockLocalStorage.clear()
        window.matchMedia = jest.fn().mockImplementation((query) => ({
            matches: query === '(prefers-color-scheme: dark)',
            addListener: jest.fn(),
            removeListener: jest.fn(),
        }))

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
                <ThemeToggle />
            </ThemeProvider>,
        )

        await waitFor(() => {
            const sunIcon = screen.getByTestId('sun-icon')
            expect(sunIcon).toBeInTheDocument()
        })

        const button = screen.getByTestId('theme-toggle')
        await act(async () => {
            button.click()
        })

        await waitFor(() => {
            const moonIcon = screen.getByTestId('moon-icon')
            expect(moonIcon).toBeInTheDocument()
        })

        await waitFor(() => {
            expect(localStorage.getItem('theme')).toBe('light')
        })
    })

    it('sets the theme from localStorage if available', async () => {
        mockLocalStorage.setItem('theme', 'dark')
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>,
        )
        waitFor(() => expect(screen.getByText('light')).toBeInTheDocument())
    })

    it('does not render anything until theme is loaded', async () => {
        const { container } = render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>,
        )
        await waitFor(() => expect(container).not.toBeEmptyDOMElement())
        expect(screen.getByTestId('theme-toggle')).toHaveTextContent('dark')
    })

    it('sets theme and updates localStorage when theme is changed', async () => {
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>,
        )

        const toggle = screen.getByText('dark')
        expect(toggle).toBeInTheDocument()

        const button = screen.getByTestId('theme-toggle')
        await act(async () => button.click())

        await waitFor(() => {
            const darkToggle = screen.getByText('light')
            expect(darkToggle).toBeInTheDocument()

            expect(localStorage.getItem('theme')).toBe('dark')
        })
    })
})
