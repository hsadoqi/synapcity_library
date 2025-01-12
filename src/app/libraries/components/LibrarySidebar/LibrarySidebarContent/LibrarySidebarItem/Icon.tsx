import { LucideProps, icons } from 'lucide-react'

interface IconProps extends LucideProps {
    icon: keyof typeof icons
}

const Icon = ({ icon, ...props }: IconProps) => {
    const LucideIcon = icons[icon]

    if (!LucideIcon) {
        console.error(`Icon with name "${icon}" not found.`)
        return null
    }

    return <LucideIcon {...props} />
}

export default Icon
