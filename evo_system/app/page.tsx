import DashboardLayout from "@/components/layout/DashboardLayout"
import TopNavbar from "@/components/navbar/TopNavbar"
import HeroBanner from "@/components/hero/HeroBanner"

export default function Home() {
  return (
    <DashboardLayout>

      <TopNavbar />

      <HeroBanner />

    </DashboardLayout>
  )
}