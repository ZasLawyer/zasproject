interface Props {
    className?: string
    children: string | JSX.Element | JSX.Element[]
}

export function Title({ className, children }: Props) {
    return (
        <h1
            className={`bg-clip-text bg-gradient-to-r from-sky-500 to-violet-600 text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold
             text-center py-10 ${className}`}
        >
            {children}
        </h1>
    )
}
