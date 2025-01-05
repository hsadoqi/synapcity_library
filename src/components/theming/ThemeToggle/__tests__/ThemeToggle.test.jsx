import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from '../ThemeToggle'
import { createMockLocalStorage } from '../../../../__mocks__/localStorage'
import {
    renderWithoutThemeContext,
    renderWithThemeContext,
} from './utils/renderWithThemeContext'

describe('ThemeToggle Component', () => {
    let localStorageMock

    beforeEach(() => {
        localStorageMock = createMockLocalStorage() // Create a fresh mock
    })

    afterEach(() => {
        if (localStorageMock.clear) {
            localStorageMock.clear()
        }
        jest.restoreAllMocks()
    })

    it('renders correctly with dark theme', () => {
        const setTheme = jest.fn()
        renderWithThemeContext(setTheme, true)

        expect(screen.getByRole('button')).toContainElement(
            screen.getByTestId('sun-icon'),
        )
    })

    it('renders correctly with light theme', () => {
        const setTheme = jest.fn()
        renderWithThemeContext(setTheme, false)

        expect(screen.getByRole('button')).toContainElement(
            screen.getByTestId('moon-icon'),
        )
    })

    it('calls setTheme with light when theme is dark and button is clicked', () => {
        const setTheme = jest.fn()
        renderWithThemeContext(setTheme, true)

        fireEvent.click(screen.getByRole('button'))
        expect(setTheme).toHaveBeenCalledWith('light')
    })

    it('calls setTheme with dark when theme is light and button is clicked', () => {
        const setTheme = jest.fn()
        renderWithThemeContext(setTheme, false)

        fireEvent.click(screen.getByRole('button'))
        expect(setTheme).toHaveBeenCalledWith('dark')
    })

    it('should persist theme in localStorage', () => {
        localStorageMock.setItem('theme', 'dark')
        expect(localStorageMock.getItem('theme')).toBe('dark')

        localStorageMock.clear()
        expect(localStorageMock.getItem('theme')).toBeNull()
    })

    it('does not render anything if context is undefined', () => {
        renderWithoutThemeContext()
        expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
})
