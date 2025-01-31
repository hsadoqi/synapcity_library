const generateColorClasses = (color: string) => {
    const shades = [
        '500',
        '600',
        '700',
        '800',
        '900',
        '300',
        '400',
        '100',
        '200',
        '50',
    ]

    const classes = shades.flatMap((shade) => [
        `border-${color}-${shade}`,
        `bg-${color}-${shade}`,
        `text-${color}-${shade}`,
        `dark:bg-${color}-${shade}`,
        `dark:text-${color}-${shade}`,
    ])

    return classes
}

const safelist = [
    ...generateColorClasses('fuchsia'),
    ...generateColorClasses('purple'),
    ...generateColorClasses('pink'),
    ...generateColorClasses('sky'),
    ...generateColorClasses('green'),
    ...generateColorClasses('blue'),
    ...generateColorClasses('neutral'),
    // Add other colors if needed
]

export default safelist
