import { Disclosure } from '@headlessui/react'
import { INavigationMenu } from '@/interfaces'
import Link from 'next/link'

interface Props {
    navigation: INavigationMenu[]
}

export function MobilMenuButtons({ navigation }: Props) {
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                    <Disclosure.Button
                        key={item.name}
                        as="div"
                        className={classNames(
                            item.current
                                ? 'bg-violet-300/50  text-violet-700 font-medium'
                                : 'text-black hover:text-violet-700',
                            'block px-3 py-2 rounded-md text-base font-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        <Link href={item.href} className="block">
                            {item.name}
                        </Link>
                    </Disclosure.Button>
                ))}
            </div>
        </Disclosure.Panel>
    )
}
