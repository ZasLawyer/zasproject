import { MainLayout } from '@/layouts/MainLayout'
import { Hero } from '@/components/organisms/Hero'
import { HowWorks } from '@/components/organisms/HowWorks'

export default function HomePage() {
    return (
        <MainLayout>
            <Hero />
            <HowWorks className="mt-10 sm:mt-24" />
        </MainLayout>
    )
}
