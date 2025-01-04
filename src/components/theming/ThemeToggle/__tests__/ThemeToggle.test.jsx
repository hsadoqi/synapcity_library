import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from '../ThemeToggle'
import { ThemeContext } from '../../../../contexts'

const renderWithThemeContext = (theme, setTheme) => {
    return render(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeToggle />
        </ThemeContext.Provider>,
    )
}

describe('ThemeToggle Component', () => {
    it('renders correctly with dark theme', () => {
        const setTheme = jest.fn()
        renderWithThemeContext('dark', setTheme)

        expect(screen.getByRole('button')).toContainElement(
            screen.getByTestId('sun-icon'),
        )
    })

    it('renders correctly with light theme', () => {
        const setTheme = jest.fn()
        renderWithThemeContext('light', setTheme)

        expect(screen.getByRole('button')).toContainElement(
            screen.getByTestId('moon-icon'),
        )
    })

    it('calls setTheme with light when theme is dark and button is clicked', () => {
        const setTheme = jest.fn()
        renderWithThemeContext('dark', setTheme)

        fireEvent.click(screen.getByRole('button'))
        expect(setTheme).toHaveBeenCalledWith('light')
    })

    it('calls setTheme with dark when theme is light and button is clicked', () => {
        const setTheme = jest.fn()
        renderWithThemeContext('light', setTheme)

        fireEvent.click(screen.getByRole('button'))
        expect(setTheme).toHaveBeenCalledWith('dark')
    })

    it('does not render anything if context is undefined', () => {
        render(
            <ThemeContext.Provider value={null}>
                <ThemeToggle />
            </ThemeContext.Provider>,
        )

        expect(screen.queryByRole('button')).toBeNull()
    })
})
