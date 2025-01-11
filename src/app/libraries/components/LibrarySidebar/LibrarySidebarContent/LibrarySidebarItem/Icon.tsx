import { LucideProps, icons } from 'lucide-react'

interface IconProps extends LucideProps {
    name: keyof typeof icons
}

const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = icons[name]

    if (!LucideIcon) {
        console.error(`Icon with name "${name}" not found.`)
        return null // Or a fallback icon
    }

    return <LucideIcon {...props} />
}

export default Icon
