import { BrandLogo } from '@/components/atoms/BrandLogo/BrandLogo'
import { INavigationMenu } from '@/interfaces'
import Link from 'next/link'

interface Props {
    navigation: INavigationMenu[]
}

export function Footer({ navigation }: Props) {
    const year = new Date().getFullYear()

    return (
        <footer className="max-w-7xl mx-auto py-5 px-2 sm:px-6 lg:px-8 mt-10  text-slate-600">
            <div className="sm:flex justify-between items-center text-center border-b border-violet-300 py-4 tracking-wide space-y-2 sm:space-y-0">
                <BrandLogo className="w-9 h-10 mx-auto sm:mx-0" />
                <nav>
                    <ul className="flex justify-center sm:justify-end items-center space-x-3">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="text-sm text-center mt-8">
                &copy; {year} Zas. Todos los derechos reservados
            </div>
        </footer>
    )
}
