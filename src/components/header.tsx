'use client';
import {RedirectType} from "next/dist/client/components/redirect";
import {useRouter} from "next/navigation";

export default function Header({isLogin, currentActive}: { isLogin: boolean, currentActive?: string }) {
    const router = useRouter()

    const handleRedirect = (path: string) => {
        router.replace(path, RedirectType.replace)
    };

    return (
        <div className="container mx-auto py-5 bg-primary-900">
            <div className="flex items-center">
                <div className="">
                    <img onClick={() => {
                        handleRedirect('/pages/dashboard')
                    }} className="h-[60px] w-auto cursor-pointer" src="/skyworldLogo.png"/>
                </div>
                {!isLogin && (
                    <div className="grow ml-5 flex justify-end items-center">
                        <div onClick={() => {
                            handleRedirect('/pages/dashboard')
                        }}
                             className={`px-10 cursor-pointer text-header ${currentActive === 'dashboard' ? 'text-[#59C3FF]' : 'text-white'}`}>
                            Dashboard
                        </div>
                        <div onClick={() => {
                            handleRedirect('/pages/product')
                        }}
                             className={`px-10 cursor-pointer text-header ${currentActive === 'product' ? 'text-[#59C3FF]' : 'text-white'}`}>
                            Product
                        </div>
                        <div onClick={() => {
                            handleRedirect('/pages/guide')
                        }}
                             className={`px-10 cursor-pointer text-header ${currentActive === 'guide' ? 'text-[#59C3FF]' : 'text-white'}`}>
                            Guide
                        </div>
                        <div onClick={() => {
                            handleRedirect('/pages/profile')
                        }}
                             className={`px-10 cursor-pointer text-header ${currentActive === 'profile' ? 'text-[#59C3FF]' : 'text-white'}`}>
                            <span className="material-symbols-outlined">person</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}