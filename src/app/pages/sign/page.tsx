'use client';
import SignInPage from "@/app/pages/sign/signIn";
import Header from "@/components/header";
import {usePathname} from "next/navigation";
import ForgetPasswordPage from "@/app/pages/sign/forgetPassword";
import SignUpPage from "@/app/pages/sign/signUp";
import ResetPasswordPage from "@/app/pages/sign/resetPassword";

export default function SignPage() {

    const path = usePathname()

    return (
        <div className="h-screen bg-primary-900">
            <div className="bg-primary-900">
                <Header isLogin={true}/>
            </div>
            <div className=" bg-primary-900">
                <div className="container mx-auto">
                    <div className="flex justify-center text-white lg:text-title">SKYWORLD API DEVELOPER PORTAL</div>
                    <div className="mt-9 grid grid-cols-12 ">
                        <div className="lg:col-span-4 col-span-3 "/>
                        <div className="lg:col-span-4 col-span-6 bg-[#F7FAFC] p-[48px] rounded">
                            {path === '/sign/sign-in' && <SignInPage/>}
                            {path === '/sign/forget' && <ForgetPasswordPage/>}
                            {path === '/sign/sign-up' && <SignUpPage/>}
                            {path === '/sign/reset' && <ResetPasswordPage/>}
                        </div>
                        <div className="lg:col-span-4 col-span-3 "/>
                    </div>
                </div>
            </div>
        </div>

    )
}