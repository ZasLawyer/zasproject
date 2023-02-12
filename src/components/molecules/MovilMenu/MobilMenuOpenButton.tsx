import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface Props {
    open: boolean
}

export function MobilMenuOpenButton({ open }: Props) {
    return (
        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-violet-300/50 hover:text-violet-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-400">
            <span className="sr-only">Abrir menu movil</span>
            {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
        </Disclosure.Button>
    )
}