import {Button} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {Input, Textarea} from "@nextui-org/input";
import React, {useState} from "react";

export default function Settings({
                                     projectId,
                                     projectName,
                                     projectDescription
                                 }: { projectId: number, projectName: string, projectDescription: string }) {

    const router = useRouter();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        id: projectId,
        project_name: projectName,
        description: projectDescription
    })

    const handleDeleteProject = () => {
        router.replace('/pages/dashboard', RedirectType.replace)
    }

    const handleChange = () => {
        setIsEdit(true);
    }

    const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        formData[name] = value;
        setFormData(values => ({...values, [name]: value}))
    };

    const handleReset = () => {
        setFormData({
            id: projectId,
            project_name: projectName,
            description: projectDescription
        })
    }
    const handleSave = () => {
        setIsEdit(false);
    }

    return (
        <div>
            <form method="POST">
                <div className="flex justify-end items-center">
                    <div className="primary-button">
                        <Button color="primary" onClick={handleDeleteProject}
                                className=" font-bold text-[14px] py-2.5 text-white px-[32px] text-center rounded-lg">
                            Delete Project
                        </Button>
                    </div>
                </div>

                <div className="my-4">
                    <Input type="text-[16px]" isReadOnly={!isEdit} onChange={handleFormDataChange}
                           name="project_name" isRequired
                           label="Project Name" value={formData.project_name} className="max-w-xs"/>
                </div>

                <div className="my-4">
                    <Textarea
                        errorMessage={formData.description == '' && 'Please input your project description!'}
                        key={'description'} value={formData.description || ''} isRequired
                        name={'description'}
                        label="Project Description" placeholder="Enter your description"
                        className="w-full" onChange={handleFormDataChange}
                    />
                </div>

                {
                    !isEdit && (
                        <div className="mt-20 primary-button">
                            <Button className="font-bold text-[14px] py-2.5 text-white
                                px-[32px] text-center rounded-lg" onClick={handleChange} color="primary"> Edit
                                Project </Button>
                        </div>
                    )
                }

                {
                    isEdit && (
                        <div className="mt-20 flex">
                            <div className="grid grid-cols-2 gap-12">
                                <div className="col-span-1 primary-button">
                                    <Button color="primary" onClick={handleReset}
                                            className=" font-bold text-[14px] py-2.5 text-white px-[32px] text-center rounded-lg">
                                        Reset
                                    </Button>
                                </div>
                                <div className="col-span-1 primary-button">
                                    <Button color="primary" onClick={handleSave}
                                            className=" font-bold text-[14px] py-2.5 text-white px-[32px] text-center rounded-lg">
                                        Save Changes
                                    </Button>
                                </div>
                            </div>
                            <div className="grow">

                            </div>
                        </div>
                    )
                }

            </form>
        </div>
    );
}