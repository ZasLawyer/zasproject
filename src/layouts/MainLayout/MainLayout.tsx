import Head from 'next/head'
import { BackgroundBottom, BackgroundTop } from '@/components/atoms/Background'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { navigation } from '@/components/molecules/NavBar/NavBar'

interface Props {
    children: JSX.Element | JSX.Element[]
    title?: string
}

export function MainLayout({ children, title }: Props) {
    const origin = typeof window !== 'undefined' && window.location.origin

    return (
        <div>
            <Head>
                <title>{title || 'Zas Impugnaciones'}</title>
                <meta
                    name="description"
                    content="Sitio web de impugnaciones de multas de trafico por foto radares"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta property="og:title" content="Zas Impugnaciones" />
                <meta
                    property="og:description"
                    content="Sitio web de impugnaciones de multas de trafico por foto radares"
                />
                <meta property="og:url" content={origin || undefined} />
                <meta property="og:image" content="/og-image.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="isolate">
                <BackgroundTop />
                <Header />

                <main>{children}</main>
                <BackgroundBottom />

                <Footer navigation={navigation} />
            </div>
        </div>
    )
}
