import SignInPage from "@/app/pages/sign/signIn";
import Header from "@/components/header";

export default function SignPage() {
    return (

        <div className="h-screen bg-primary-900">
            <div className="bg-primary-900">
                <Header/>
            </div>
            <div className=" bg-primary-900">
                <div className="container mx-auto">
                    <div className="flex justify-center text-white lg:text-title">SKYWORLD API DEVELOPER PORTAL</div>
                    <div className="mt-9 grid grid-cols-12 ">
                        <div className="lg:col-span-4 col-span-3 "/>
                        <div className="lg:col-span-4 col-span-6 bg-[#F7FAFC] p-[48px] rounded">
                            <SignInPage/>
                        </div>
                        <div className="lg:col-span-4 col-span-3 "/>
                    </div>
                </div>
            </div>
        </div>

    )
}