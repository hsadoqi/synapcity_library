'use client'

import { Button } from '@/components'
import { useAreasStore } from '@/stores/areas-store'
import { LucideHome, LucidePlusSquare } from 'lucide-react'
import { usePathname } from 'next/navigation'
import AreasNavLinkButton from '../AreasNavLinkButton/AreasNavLinkButton'
import { NavigationItem } from '../NavigationItem'
import clsx from 'clsx'

export default function AreasMenu() {
    const {
        areas,
        activeArea,
        resetActiveState,
        selectActiveArea,
        setAreasHeader,
    } = useAreasStore()
    const pathname = usePathname()

    const addNewArea = () => {
        console.log('trigger dialog')
    }

    return (
        <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-4 overflow-hidden">
                <NavigationItem
                    slug={'/'}
                    label={'Home'}
                    className="max-w-5"
                    onClick={() => {
                        setAreasHeader(false)
                        resetActiveState()
                    }}
                >
                    <LucideHome size={16} />
                </NavigationItem>
                {activeArea && pathname.startsWith('/areas') ? (
                    <NavigationItem
                        slug={
                            activeArea?.slug && pathname !== '/areas'
                                ? activeArea?.slug
                                : '/'
                        }
                        label={
                            activeArea?.label && pathname !== 'Areas'
                                ? activeArea?.label
                                : 'Areas'
                        }
                        asButton={false}
                        onClick={() => {
                            // setAreasHeader(false)
                            resetActiveState()
                        }}
                        className={clsx('w-auto', {
                            active: pathname === activeArea.slug,
                        })}
                    />
                ) : (
                    <NavigationItem
                        slug="/"
                        label="Areas"
                        className="max-w-32"
                        onClick={() => {
                            setAreasHeader(false)
                            resetActiveState()
                        }}
                    />
                )}
                <Button onClick={addNewArea} size="icon">
                    <LucidePlusSquare size={16} />
                </Button>
                <div className="flex items-center gap-2 overflow-x-auto w-[90vh] scrollbar-hide mx-auto">
                    {activeArea?.navItems ? (
                        activeArea.navItems.map((item, index) => (
                            <AreasNavLinkButton
                                key={`item-${index}`}
                                slug={item.slug}
                                item={item}
                                // onClick={() => selectActiveCategory(item.slug)}
                            />
                        ))
                    ) : (
                        <>
                            {areas.map((area, index) => {
                                const { isArchived, label, slug } = area
                                return (
                                    !isArchived &&
                                    slug && (
                                        <NavigationItem
                                            key={`area-${index}`}
                                            asButton={false}
                                            onClick={() =>
                                                selectActiveArea(slug)
                                            }
                                            slug={slug}
                                            label={label}
                                        />
                                    )
                                )
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
