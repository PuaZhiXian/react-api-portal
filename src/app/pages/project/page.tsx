'use client'
import {ProjectOverview} from "@/interface/project-overview";
import {Button} from "@nextui-org/react";
import Header from "@/components/header";
import {useState} from "react";
import Settings from "@/app/pages/project/settings";
import Statistics from "@/app/pages/project/statistics";
import Credential from "@/app/pages/project/credential";
import ApiCollection from "@/app/pages/project/api-collection";

export default function ProjectPage() {

    const projectOverview!: ProjectOverview = {
        id: 1,
        description: 'Hello World Description , Something more ',
        project_name: 'Hello World'
    };
    const [selectingTab, setSelectingTab] = useState<string>('statistics');

    const handleChangeTab = (tab: string) => {
        setSelectingTab(tab);
    }

    return (
        <div className="h-screen">
            <div className="bg-primary-900">
                <Header/>
            </div>
            <div className="mx-auto container">
                <div className="mt-[18px] text-[32px] font-bold">{projectOverview.project_name}</div>
                <div className=" grid justify-items-end primary-button">
                    <Button className=" font-bold text-[14px] py-2.5 text-white px-[32px]
                    text-center rounded-lg" color="primary" onClick={() => handleChangeTab('settings')}>
                        Project Settings
                    </Button>
                </div>

                <div className="my-8 grid grid-cols-12">
                    <div className="col-span-2 button-focus">
                        <div className="w-full">
                            <Button color={selectingTab === 'statistics' ? `primary` : `default`}
                                    onClick={() => handleChangeTab('statistics')}
                                    className='text-xl w-full h-fit border border-black py-2.5'>
                                Statistics
                            </Button>
                        </div>
                        <div className="w-full">
                            <Button color={selectingTab === 'credentials' ? `primary` : `default`}
                                    onClick={() => handleChangeTab('credentials')}
                                    className='text-xl w-full h-fit border border-black py-2.5'>
                                Credentials
                            </Button>
                        </div>
                        <div className="w-full">
                            <Button color={selectingTab === 'api' ? `primary` : `default`}
                                    onClick={() => handleChangeTab('api')}
                                    className='text-xl w-full h-fit border border-black py-2.5'>
                                Collections
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-10 px-8 py-[18px] min-h-[540px] border border-black">
                        {
                            selectingTab === 'settings' && (
                                <Settings projectDescription={projectOverview.description || ''}
                                          projectId={projectOverview.id || -1}
                                          projectName={projectOverview.project_name || ''}/>
                            )
                        }
                        {
                            selectingTab === 'statistics' && (
                                <Statistics projectId={projectOverview.id || -1}/>
                            )
                        }
                        {
                            selectingTab === 'credentials' && (
                                <Credential projectId={projectOverview.id || -1}
                                            projectName={projectOverview.project_name || ''}/>
                            )
                        }
                        {
                            selectingTab === 'api' && (
                                <ApiCollection/>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}