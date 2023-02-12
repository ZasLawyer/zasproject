import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
    href?: string
    disable?: boolean
    loading?: boolean
    primary?: boolean
    secondary?: boolean
    action?: () => void
    className?: string
    children: string | JSX.Element | JSX.Element[] | ReactNode
}

export function Button({
    href = '#',
    className,
    children,
    secondary = false,
    action,
    loading = false,
    disable = false,
}: Props) {
    const defaultClasses =
        'inline-block transition-all font-semibold rounded py-2 px-4 disabled:cursor-not-allowed'

    const secondaryClasses =
        'bg-indigo-600 text-white hover:bg-violet-500 active:bg-indigo-800 disabled:bg-slate-400'

    const primaryClasses =
        'bg-fuchsia-500 text-white hover:bg-fuchsia-700 active:bg-fuchsia-800 disabled:bg-slate-400'

    const loadingSvg = (
        <Image
            src="/loading.svg"
            alt="Loading"
            className="animate-spin ml-3"
            width={20}
            height={20}
        />
    )

    const actionButton = (
        <button
            disabled={disable}
            onClick={action}
            className={
                secondary
                    ? `${defaultClasses} ${secondaryClasses}`
                    : `${defaultClasses} ${primaryClasses}`
            }
        >
            {disable ? (
                <div className="flex justify-between items-center">
                    {children}
                    {loading && loadingSvg}
                </div>
            ) : (
                <div className="flex justify-between items-center">
                    {children}
                    {loading && loadingSvg}
                </div>
            )}
        </button>
    )

    const linkButton = (
        <Link
            href={href}
            className={
                secondary
                    ? `${defaultClasses} ${secondaryClasses}`
                    : `${defaultClasses} ${primaryClasses}`
            }
        >
            <div className="flex justify-between items-center">
                {children}
                {loading && loadingSvg}
            </div>
        </Link>
    )

    return action ? actionButton : linkButton
}
