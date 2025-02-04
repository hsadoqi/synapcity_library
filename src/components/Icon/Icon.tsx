import { LucideProps, icons as lucideIcons } from 'lucide-react'
import { Icon, IconProps } from '@iconify/react'

interface LucideIconProps extends LucideProps {
    icon: keyof typeof lucideIcons
}

interface IconifyIconComponentProps extends IconProps {
    icon: string
}

const LucideIconComponent = ({ ...props }: LucideIconProps) => {
    const LucideIcon = lucideIcons[props.icon]

    if (!LucideIcon) {
        console.error(
            `Icon with name "${props.icon}" not found in Lucide icons.`,
        )
        return null
    }

    return <LucideIcon {...props} />
}

const IconComponent = (props: LucideIconProps | IconifyIconComponentProps) => {
    const lucideIcon = lucideIcons[props.icon as keyof typeof lucideIcons]
    if (!!lucideIcon) {
        return <LucideIconComponent {...(props as LucideIconProps)} />
    } else {
        return <Icon {...(props as IconProps)} />
    }
}

export default IconComponent
