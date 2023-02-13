interface Props {
    title: string
    description?: string
    icon: JSX.Element
    className?: string
}

export function SmallCard({ title, description, icon, className }: Props) {
    return (
        <div
            className={`flex items-center justify-start text-slate-600 shadow-lg rounded-2xl border border-slate-50 w-full md:w-1/3 p-3 ${className}`}
        >
            <div className="text-center p-3">{icon}</div>
            <div className="p-3">
                <h2 className="tracking-wide font-medium mb-1.5">{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}
