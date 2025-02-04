import { create, useStore } from 'zustand'

export const areasData: Area[] = [
    {
        label: 'Programming',
        slug: '/areas/programming',
        isArchived: false,
        navItems: [
            {
                label: 'Tasks',
                slug: '/areas/programming/tasks',
            },
            {
                label: 'Projects',
                slug: '/areas/programming/projects',
            },
            {
                label: 'Library',
                slug: '/areas/programming/libraries',
            },
            {
                label: 'Resources',
                slug: '/areas/programming/resources',
            },
            {
                label: 'Archives',
                slug: '/areas/programming/archives',
            },
        ],
    },
    {
        label: 'Fitness',
        slug: '/areas/fitness',
        isArchived: false,
        navItems: [
            {
                label: 'Tasks',
                slug: '/areas/fitness/tasks',
            },
            {
                label: 'Projects',
                slug: '/areas/fitness/goals',
            },
            {
                label: 'Library',
                slug: '/areas/fitness/libraries',
            },
            {
                label: 'Resources',
                slug: '/areas/fitness/resources',
            },
            {
                label: 'Archives',
                slug: '/areas/fitness/archives',
            },
        ],
    },
    {
        label: 'Cooking',
        slug: '/areas/cooking',
        isArchived: false,
        navItems: [
            {
                label: 'Tasks',
                slug: '/areas/cooking/tasks',
            },
            {
                label: 'Projects',
                slug: '/areas/cooking/projects',
            },
            {
                label: 'Libraries',
                slug: '/areas/cooking/libraries',
            },
            {
                label: 'Resources',
                slug: '/areas/cooking/resources',
            },
            {
                label: 'Archives',
                slug: '/areas/cooking/archives',
            },
        ],
    },
    {
        label: 'Mental Health',
        slug: '/areas/mental-health',
        isArchived: false,
        navItems: [
            {
                label: 'Tasks',
                slug: '/areas/mental-health/tasks',
            },
            {
                label: 'Projects',
                slug: '/areas/mental-health/projects',
            },
            {
                label: 'Library',
                slug: '/areas/mental-health/libraries',
            },
            {
                label: 'Resources',
                slug: '/areas/mental-health/resources',
            },
            {
                label: 'Archives',
                slug: '/areas/mental-health/archives',
            },
        ],
    },
    {
        label: 'System Design',
        slug: '/areas/system-design',
        isArchived: false,
        navItems: [
            {
                label: 'Tasks',
                slug: '/areas/system-design/tasks',
            },
            {
                label: 'Projects',
                slug: '/areas/system-design/projects',
            },
            {
                label: 'Library',
                slug: '/areas/system-design/libraries',
            },
            {
                label: 'Resources',
                slug: '/areas/system-design/resources',
            },
            {
                label: 'Archives',
                slug: '/areas/system-design/archives',
            },
        ],
    },
    {
        label: 'Basement Renovation',
        slug: '/areas/basement-renovation',
        isArchived: false,
        navItems: [
            {
                label: 'Library',
                slug: '/areas/basement-renovation/library',
            },
            {
                label: 'Tasks',
                slug: '/areas/basement-renovation/tasks',
            },
            {
                label: 'Projects',
                slug: '/areas/basement-renovation/projects',
            },
            {
                label: 'Resources',
                slug: '/areas/basement-renovation/resources',
            },
            {
                label: 'Archives',
                slug: '/areas/basement-renovation/archives',
            },
        ],
    },
]

export type Area = {
    label: string
    slug?: string
    isArchived?: boolean
    navItems?: { label: string; slug: string }[]
}

export type AreasState = {
    isAreasHeaderVisible: boolean
    areas: Area[]
    activeArea: Area | null
    activeCategory: string
}

export type AreasActions = {
    setAreasHeader: (open?: boolean) => void
    addNewArea: (area: Area) => void
    archiveArea: (label: string) => void
    restoreArea: (label: string) => void
    selectActiveArea: (slug: string | null) => void
    selectActiveCategory: (category: string) => void
    resetActiveState: () => void
}

export type AreasStore = AreasState & AreasActions

export const initAreasStore = (): AreasState => ({
    isAreasHeaderVisible: false,
    areas: areasData,
    activeArea: null,
    activeCategory: '',
})

export const defaultInitState: AreasState = {
    isAreasHeaderVisible: false,
    areas: areasData,
    activeArea: null,
    activeCategory: '',
}

export const createAreasStore = (initState: AreasState = defaultInitState) =>
    create<AreasStore>((set) => ({
        ...initState,
        setAreasHeader: (open) =>
            set((state) => ({
                isAreasHeaderVisible: open || !state.isAreasHeaderVisible,
            })),
        addNewArea: (area) =>
            set((state) => ({ areas: [...state.areas, area] })),
        archiveArea: (label) => {
            set((state) => {
                const newAreas = state.areas.map((area) =>
                    area.label === label ? { ...area, isArchived: true } : area,
                )
                return {
                    areas: newAreas,
                }
            })
        },
        restoreArea: (label) => {
            set((state) => {
                const newAreas = state.areas.map((area) =>
                    area.label === label
                        ? { ...area, isArchived: false }
                        : area,
                )
                return {
                    areas: newAreas,
                }
            })
        },
        selectActiveArea: (slug) => {
            set((state) => {
                if (state.activeArea?.slug === slug) return state
                const activeArea = slug
                    ? state.areas.find((area) => area.slug === slug)
                    : null
                return { activeArea }
            })
        },
        selectActiveCategory: (category) => {
            set((state) => {
                if (state.activeCategory === category) return state // Avoid redundant updates
                return { activeCategory: category }
            })
        },
        resetActiveState: () => {
            set({ activeArea: null, activeCategory: '' })
        },
    }))

const areasStore = createAreasStore(initAreasStore())

export const useAreasStore = () => useStore(areasStore)
