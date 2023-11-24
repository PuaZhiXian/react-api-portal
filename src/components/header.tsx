export default function Header({isLogin}: { isLogin: boolean }) {

    return (
        <div className="container mx-auto py-5 bg-primary-900">
            <div className="flex items-center">
                <div className="">
                    <img className="h-[60px] w-auto cursor-pointer" src="/skyworldLogo.png"/>
                </div>
                {!isLogin && (
                    <div className="grow ml-5 flex justify-end items-center">
                        <div
                            className="px-10 cursor-pointer text-header text-[#59C3FF]">
                            Dashboard
                        </div>
                        <div
                            className="px-10 cursor-pointer text-header text-[#59C3FF]">
                            Product
                        </div>
                        <div
                            className="px-10 cursor-pointer text-header text-[#59C3FF]">
                            Guide
                        </div>
                        <div
                            className="px-10 cursor-pointer text-[#59C3FF]">
                            <span className="material-symbols-outlined">person</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}