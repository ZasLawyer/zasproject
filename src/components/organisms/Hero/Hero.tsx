import Image from 'next/image'

import { Title } from '@/components/atoms/Title'
import { Button } from '@/components/atoms/Button'

export function Hero() {
    return (
        <section className="block sm:flex justify-between items-center text-slate-600 body-font max-w-7xl mx-auto px-2 md:px-6 lg:px-8 mt-10 sm:mt-20">
            <div className="sm:w-1/2 text-center sm:text-left">
                <Title className="sm:!text-left">
                    ¿Tienes multas por fotoradares? Impugnalas!
                </Title>
                <p className="text-xl sm:text-2xl">
                    Te sientes perjudicado, es tu derecho a impugnar.
                </p>
                <p className="text-lg sm:text-xl mb-10">Infórmate e impugna.</p>
                <Button href="/">Impugnar</Button>
            </div>
            <div className="hidden sm:block">
                <Image
                    src="./lawyer.svg"
                    alt="Abogado"
                    priority
                    width={400}
                    height={400}
                />
            </div>
        </section>
    )
}
