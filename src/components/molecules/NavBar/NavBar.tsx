import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

import { MobilMenuOpenButton } from '@/components/molecules/MovilMenu'
import { MobilMenuButtons } from '@/components/molecules/MovilMenu/MobilMenuButtons'

import { INavigationMenu } from '@/interfaces'
import { LoggedInButtons } from '@/components/molecules/LoggedInButtons'
import { BrandLogo } from '@/components/atoms/BrandLogo/BrandLogo'
import Link from 'next/link'

export const navigation: INavigationMenu[] = [
    { name: 'Inicio', href: '/', current: true },
    { name: 'Impugnaciones', href: '#', current: false },
]
const navigationMobile: INavigationMenu[] = [
    { name: 'Inicio', href: '/', current: true },
    { name: 'Impugnaciones', href: '#', current: false },
    { name: 'Iniciar sesión', href: '#', current: false },
    { name: 'Registrarse', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function NavBar() {
    const [isLoggedIn] = useState<boolean>(true)

    return (
        <Disclosure
            as="nav"
            className="backdrop-blur-lg bg-white/20 shadow-2xl shadow-gray-300 tracking-wide w-full fixed"
        >
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-20 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <MobilMenuOpenButton open={open} />
                            </div>

                            {/*Nav*/}
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                {/*<div className="flex flex-shrink-0 items-center">*/}
                                <BrandLogo className="mr-0 sm:mr-20" />
                                {/*</div>*/}

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4 ">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? ' text-violet-700 font-bold relative before:border-b-2 before:absolute before:border-violet-700 before:-bottom-[20px] before:left-0 before:w-full'
                                                        : 'text-black hover:text-violet-700',
                                                    'px-3 py-2 rounded-md text-md transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 '
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? 'page'
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {isLoggedIn ? (
                                    <LoggedInButtons navigation={navigation} />
                                ) : (
                                    <div className="hidden sm:flex space-x-2 items-center">
                                        <Link
                                            href="#"
                                            className="hover:text-violet-700 transition duration-300"
                                        >
                                            Iniciar sesión
                                        </Link>
                                        <Link
                                            href="#"
                                            className="bg-violet-300/50 text-violet-700 px-3 py-2 rounded-md font-medium hover:bg-violet-300/70 transition duration-300"
                                        >
                                            Registrarse
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <MobilMenuButtons navigation={navigationMobile} />
                </>
            )}
        </Disclosure>
    )
}
