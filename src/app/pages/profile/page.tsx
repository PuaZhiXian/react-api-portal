'use client';
import Header from "@/components/header";
import {Button} from "@nextui-org/react";
import React, {useState} from "react";
import PersonalInformation from "@/app/pages/profile/personalInformation";
import ChangePassword from "@/app/pages/profile/changePassword";

export default function ProfilePage() {


    const [selectingTab, setSelectingTab] = useState<string>('personal-information');

    const handleLogout = () => {
        console.log('logout ing')
    }

    const handleChangeTab = (tab: string) => {
        setSelectingTab(tab)
    }

    return (
        <div className="h-screen">
            <div className="bg-primary-900">
                <Header isLogin={false} currentActive={'profile'}/>
            </div>

            <div className="mx-auto container px-[10px] lg:px-0 ">
                <div className="flex justify-end">
                    <Button
                        className="rounded my-[20px]"
                        color="primary" onClick={() => handleLogout()}>
                        <div className="lg:text-button text-xs">Logout</div>
                    </Button>
                </div>


                <div className="mb-8 lg:grid lg:grid-cols-12">
                    <div className="flex lg:block col-span-2 button-focus w-1/2 lg:w-full">
                        <div className="w-full">
                            <Button onClick={() => handleChangeTab('personal-information')}
                                    color={selectingTab === 'personal-information' ? `primary` : `default`}
                                    radius="none" className="w-full">
                                Personal Information
                            </Button>
                        </div>
                        <div className="w-full">
                            <Button onClick={() => handleChangeTab('password')}
                                    color={selectingTab === 'password' ? `primary` : `default`}
                                    radius="none" className="w-full">
                                Change Password
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-10 px-8 py-[18px] min-h-[540px] border border-solid border-black">
                        {selectingTab === 'personal-information' && <PersonalInformation/>}
                        {selectingTab === 'password' && <ChangePassword/>}
                    </div>
                </div>

            </div>
        </div>
    )
}