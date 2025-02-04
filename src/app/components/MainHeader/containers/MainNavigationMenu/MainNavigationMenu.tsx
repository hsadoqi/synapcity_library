'use client'

import { useAreasStore } from '@/stores/areas-store'
import NavigationItem, {
    type NavigationItemProps,
} from '../../components/NavigationItem/NavigationItem'
import DropdownNavigationMenu from './DropdownNavigationMenu/DropdownNavigationMenu'

export default function MainNavigationMenu() {
    const { setAreasHeader, isAreasHeaderVisible, areas } = useAreasStore()

    const handleAreasHeader = () => {
        setAreasHeader(!isAreasHeaderVisible)
    }

    // if (isAreasHeaderVisible && pathname !== 'areas') {
    //     selectActiveArea('areas')
    // } else if(!isAreasHeaderVisible){
    //     setAreasHeader(true)
    // } else {
    //     // setAreasHeader(false)
    //     resetActiveState()
    // }

    const data: NavigationItemProps[] = isAreasHeaderVisible
        ? areas
        : [
              {
                  label: 'Library',
                  slug: '/libraries',
              },
              {
                  label: 'Projects',
                  slug: '/projects',
              },
              {
                  label: 'Areas',
                  slug: '/areas',
                  onClick: handleAreasHeader,
                  asButton: true,
              },
              {
                  label: 'Resources',
                  slug: '/resources',
              },
              {
                  label: 'Archives',
                  slug: '/archives',
              },
          ]

    return (
        <>
            <div className="w-0 lg:w-1/2">
                <div className="hidden lg:flex items-center justify-center gap-8 w-full mx-auto transition-all duration-1000 delay-150 ease-in-out">
                    {data.map((item, index) => {
                        const { label, slug, onClick, asButton } = item
                        console.log('rendering items', item)
                        return (
                            <NavigationItem
                                key={`nav-item-${index}`}
                                label={label}
                                slug={slug}
                                onClick={onClick}
                                asButton={asButton}
                            />
                        )
                    })}
                </div>
            </div>
            <DropdownNavigationMenu items={data} />
        </>
    )
}
