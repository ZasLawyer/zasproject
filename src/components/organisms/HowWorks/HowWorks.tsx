import {
    IdentificationIcon,
    CreditCardIcon,
    ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline'

import { Title } from '@/components/atoms/Title'
import { SmallCard } from '@/components/molecules/SmallCard'

const cardsInfo = [
    {
        title: 'Regístrate',
        description: 'Con tu correo y contraseña',
        icon: <IdentificationIcon width={40} color="#80C36D" />,
    },
    {
        title: 'Rellena los datos',
        description: 'Se preciso en la información',
        icon: <ClipboardDocumentListIcon width={40} color="#845EED" />,
    },
    {
        title: 'Completa el pago',
        description: 'Descarga tu impugnación',
        icon: <CreditCardIcon width={40} color="#4F9EE4" />,
    },
]

interface Props {
    className?: string
}

export function HowWorks({ className }: Props) {
    return (
        <section
            className={`max-w-7xl mx-auto px-2 md:px-6 lg:px-8 space-y-5 ${className}`}
        >
            <Title
                className={`!text-3xl sm:!text-5xl from-lime-500 to-cyan-500`}
            >
                ¿Como funciona?
            </Title>

            <div className="block md:flex justify-between items-center space-y-4 md:space-y-0 md:space-x-2">
                {cardsInfo.map(({ title, description, icon }) => (
                    <SmallCard
                        key={title}
                        title={title}
                        description={description}
                        icon={icon}
                    />
                ))}
            </div>
        </section>
    )
}
