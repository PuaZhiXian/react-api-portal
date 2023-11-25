'use client';
import Header from "@/components/header";
import {Input, Textarea} from "@nextui-org/input";
import React, {useState} from "react";
import {ProjectOverview} from "@/interface/project-overview";
import {Button, Checkbox, CheckboxGroup} from "@nextui-org/react";
import {ISelectingApiCollection} from "@/interface/i-selecting-api-collection";

export default function SubscriptionPage() {
    const [selected, setSelected] = React.useState<>([]);
    const apiCollection: ISelectingApiCollection[] = [
        {
            id: 1,
            category_name: "banker balance",
            api_collections: [
                {
                    id: 1,
                    api_collection_name: 'Get Balance',
                    description: 'Use to get balance on banker account'
                }
            ]
        },
        {
            id: 2,
            category_name: "category 2",
            api_collections: [
                {
                    id: 2,
                    api_collection_name: 'Collection Name 2',
                    description: 'Description for Collection 2'
                },
                {
                    id: 3,
                    api_collection_name: 'Collection Name 3',
                    description: 'Description for Collection 3'
                },
                {
                    id: 4,
                    api_collection_name: 'Collection Name 4',
                    description: 'Description for Collection 4'
                }
            ]
        },
        {
            id: 3,
            category_name: "category 3",
            api_collections: [
                {
                    id: 5,
                    api_collection_name: 'Collection Name 5',
                    description: 'Description for Collection 5'
                },
                {
                    id: 6,
                    api_collection_name: 'Collection Name 6',
                    description: 'Description for Collection 6'
                },
                {
                    id: 7,
                    api_collection_name: 'Collection Name 7',
                    description: 'Description for Collection 7'
                }
            ]
        }
    ];

    const [projectOverview, setProjectOverview] = useState<ProjectOverview>(
        {
            apiCollection: [],
            description: undefined,
            project_name: undefined
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        projectOverview[name] = value;
        setProjectOverview(values => ({...values, [name]: value}))
    };

    const createProject = () => {
        const numberArray = selected.map((str) => parseFloat(str));
        projectOverview.apiCollection = numberArray;
        setProjectOverview(values => ({...values, ['apiCollection']: numberArray}))
        console.log(projectOverview)
    }

    return (
        <div className="h-screen">
            <div className="bg-primary-900">
                <Header/>
            </div>
            <div className="mx-auto container pb-[20px]">
                <div className="my-10">
                    <form method="POST">
                        <div>
                            <Input className="my-2" key="project_name" type="text" name="project_name"
                                   label="Project Name" value={projectOverview.project_name || ''} isRequired
                                   errorMessage={projectOverview.project_name !== undefined && projectOverview.project_name === '' && 'Please input your project name!'}
                                   onChange={handleChange}/>
                        </div>
                        <div>
                            <Textarea
                                errorMessage={projectOverview.description !== undefined && projectOverview.description == '' && 'Please input your project description!'}
                                key={'description'} value={projectOverview.description || ''} isRequired
                                name={'description'}
                                label="Project Description" placeholder="Enter your description"
                                className="w-full" onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-3 my-10">
                            <CheckboxGroup
                                label="Select API Collection List" value={selected} onValueChange={setSelected}>
                                {
                                    apiCollection.map(value => {
                                        return (
                                            <div key={'category_' + value.id}>
                                                <div className="text-label">{value.category_name}</div>
                                                {
                                                    value.api_collections.map(value => {
                                                        return (
                                                            <div key={value.id} className={'my-[10px]'}>
                                                                <Checkbox value={value.id + ""}
                                                                          className={'flex items-center'}>
                                                                    <div
                                                                        className="text-sm text-[#616161]">{value.api_collection_name}</div>
                                                                    <div
                                                                        className="text-xs text-[#7B8794] text-justify leading-none">{value.description}</div>
                                                                </Checkbox>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }

                            </CheckboxGroup>
                        </div>

                        <div className="my-4">
                            <Button onClick={() => createProject()}
                                    className="text-white px-[32px] text-center rounded-lg" color={'primary'}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}