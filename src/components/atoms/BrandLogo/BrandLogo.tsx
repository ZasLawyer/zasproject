import Image from 'next/image'
import logo from '@/assets/logo.svg'

interface Props {
    className?: string
}

export function BrandLogo({ className }: Props) {
    return (
        <Image
            src={logo}
            alt="Logotipo"
            width={36}
            height={40}
            className={className}
        />
    )
}
