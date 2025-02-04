import { Color, ColorShade } from '@/types/styling'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getColorClasses = (color: Color, shade: ColorShade) => {
    const textShade = shade < 500 ? 50 : 950
    return `bg-${color}-${shade} text-${color}-${textShade}`
}

export function getDynamicShade(
    baseShade: ColorShade,
    useCase: 'background' | 'text' | 'hover' | 'border',
    isDarkMode: boolean,
): ColorShade {
    const shadeAdjustments: Record<typeof useCase, number> = isDarkMode
        ? {
              background: 900,
              text: 100,
              hover: 800,
              border: 700,
          }
        : {
              background: 100,
              text: 700,
              hover: 200,
              border: 400,
          }

    const adjustment = shadeAdjustments[useCase]

    return getAdjustedShade(baseShade, adjustment)
}

export function getAdjustedShade(baseShade: ColorShade, adjustment: number) {
    const adjustedShade = Math.min(
        Math.max(baseShade + adjustment - 500, 50),
        950,
    ) as ColorShade
    return adjustedShade
}

export function getTailwindClass(
    color: Color,
    baseShade: ColorShade,
    useCase: 'background' | 'text' | 'hover' | 'border',
    isDarkMode: boolean,
): string {
    const shade = getDynamicShade(baseShade, useCase, isDarkMode)
    const prefix = useCase === 'text' ? 'text' : `bg`
    return `${prefix}-${color}-${shade}`
}
