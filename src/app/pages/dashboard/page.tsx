import ProjectTable from "@/app/pages/dashboard/projectTable";
import Header from "@/components/header";

export default function DashboardPage() {
    return (
        <div className="h-screen">
            <div className="bg-primary-900">
                <Header isLogin={false}/>
            </div>
            <div className="container md:mx-auto md:px-0 px-[20px]">
                <div className="lg:text-title text-subtitle font-bold ">Dashboard</div>
                <ProjectTable/>
            </div>
        </div>

    )
}