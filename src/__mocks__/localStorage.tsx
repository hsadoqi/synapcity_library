type MockLocalStorage = {
    store: Record<string, string>
    getItem: (key: string) => string | null
    setItem: (key: string, value: string) => void
    removeItem: (key: string) => void
    clear: () => void
    key: (index: number) => string | null
    length: number
}

export const createMockLocalStorage = (): MockLocalStorage => {
    let store: Record<string, string> = {}

    return {
        store,
        getItem: (key: string) => store[key] ?? null,
        setItem: (key: string, value: string) => {
            store[key] = value
        },
        removeItem: (key: string) => {
            delete store[key]
        },
        clear: () => {
            store = {}
        },
        key: (index: number) => {
            return Object.keys(store)[index] ?? null
        },
        get length() {
            return Object.keys(store).length
        },
    }
}

export const mockLocalStorage = (mock: MockLocalStorage) => {
    const originalLocalStorage = Object.getOwnPropertyDescriptor(
        window,
        'localStorage',
    )

    Object.defineProperty(window, 'localStorage', {
        value: mock,
        writable: true,
    })

    return () => {
        if (originalLocalStorage) {
            Object.defineProperty(window, 'localStorage', originalLocalStorage)
        }
    }
}
