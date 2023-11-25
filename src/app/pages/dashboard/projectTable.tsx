'use client';
import {
    Button,
    getKeyValue,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import React, {useState} from "react";
import {ProjectOverview} from "@/interface/project-overview";
import {format, parseISO} from 'date-fns';
import {RedirectType} from "next/dist/client/components/redirect";
import {useRouter} from "next/navigation";

export default function ProjectTable() {
    const router = useRouter()
    const projects: ProjectOverview[] = [
        {
            id: 1,
            project_name: "UmSchedular",
            description: 'Time table app for Um students',
            createdAt: "2023-10-24T15:30:00.000Z",
            token: 'askdkaskdnaksnasjdna@djkansd'
        },
        {
            "id": 2,
            "project_name": "EduTrack",
            "description": "Educational tracking system",
            "createdAt": "2023-11-24T12:00:00.000Z",
            "token": "kajsdhfkajshdfkjahsdf@asdkjasdf"
        },
        {
            "id": 3,
            "project_name": "StudyBuddy",
            "description": "App to find study partners",
            "createdAt": "2023-11-24T12:15:00.000Z",
            "token": "asldkfjalksdjflkasdjf@alksdjfalk"
        },
        {
            "id": 4,
            "project_name": "LearnEase",
            "description": "Platform for easy learning",
            "createdAt": "2023-11-24T12:30:00.000Z",
            "token": "aklsdjflkajsdlkfjasd@asldkfjalk"
        },
        {
            "id": 5,
            "project_name": "TimeMaster",
            "description": "Time management app",
            "createdAt": "2023-11-24T12:45:00.000Z",
            "token": "asldkfjalksdjflkasdj@alksdjfalk"
        },
        {
            "id": 6,
            "project_name": "ScholarPlanner",
            "description": "Planning tool for scholars",
            "createdAt": "2023-11-24T13:00:00.000Z",
            "token": "aklsdjflkajsdlkfjasd@asldkfjalk"
        },
        {
            "id": 7,
            "project_name": "AcademicSync",
            "description": "Syncing tool for academic data",
            "createdAt": "2023-11-24T13:15:00.000Z",
            "token": "asldkfjalksdjflkasdj@alksdjfalk"
        },
        {
            "id": 8,
            "project_name": "ClassConnect",
            "description": "Connecting students in classes",
            "createdAt": "2023-11-24T13:30:00.000Z",
            "token": "aklsdjflkajsdlkfjasd@asldkfjalk"
        },
        {
            "id": 9,
            "project_name": "SyllabusSync",
            "description": "Syncing tool for syllabus",
            "createdAt": "2023-11-24T13:45:00.000Z",
            "token": "asldkfjalksdjflkasdj@alksdjfalk"
        },
        {
            "id": 10,
            "project_name": "StudEase",
            "description": "Tool for easing student life",
            "createdAt": "2023-11-24T14:00:00.000Z",
            "token": "aklsdjflkajsdlkfjasd@asldkfjalk"
        },
        {
            "id": 11,
            "project_name": "AcademyMate",
            "description": "Companion app for academics",
            "createdAt": "2023-11-24T14:15:00.000Z",
            "token": "asldkfjalksdjflkasdj@alksdjfalk"
        },
        {
            "id": 12,
            "project_name": "CourseCraft",
            "description": "Crafting courses efficiently",
            "createdAt": "2023-11-24T14:30:00.000Z",
            "token": "aklsdjflkajsdlkfjasd@asldkfjalk"
        },
        {
            "id": 13,
            "project_name": "StudySync",
            "description": "Syncing tool for study materials",
            "createdAt": "2023-11-24T14:45:00.000Z",
            "token": "asldkfjalksdjflkasdj@alksdjfalk"
        },
        {
            "id": 14,
            "project_name": "EduPlanner",
            "description": "Planning tool for education",
            "createdAt": "2023-11-24T15:00:00.000Z",
            "token": "aklsdjflkajsdlkfjasd@asldkfjalk"
        },
        {
            "id": 15,
            "project_name": "ClassMaster",
            "description": "Mastering classroom activities",
            "createdAt": "2023-11-24T15:15:00.000Z",
            "token": "asldkfjalksdjflkasdj@alksdjfalk"
        },
        {
            "id": 16,
            "project_name": "TimeTablePro",
            "description": "Professional timetable app",
            "createdAt": "2023-11-24T15:30:00.000Z",
            "token": "aklsdjflkajsdlkfjasd@asldkfjalk"
        },
        {
            "id": 17,
            "project_name": "EduSync",
            "description": "Syncing tool for educational data",
            "createdAt": "2023-11-24T15:45:00.000Z",
            "token": "asldkfjalksdjflkasdj@alksdjfalk"
        }
    ]
    const [searchKey, setSearchKey] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKey(e.target.value);
    };

    const [page, setPage] = React.useState(1);
    const rowsPerPage = 10;

    const pages = Math.ceil(projects.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        const filteredData = projects.filter(item =>
            item.project_name.toLowerCase().includes(searchKey.toLowerCase())
        );

        return filteredData.slice(start, end);
    }, [page, projects]);

    const openProject = (projectId: number) => {
        console.log('open project ' + projectId)
    }
    const createProject = () => {
        router.replace('/pages/subscription', RedirectType.replace)
        console.log('creating project')
    }

    function timeToString(dateTime: string) {
        const date = parseISO(dateTime);
        return <time dateTime={dateTime}>{format(date, 'LLLL d, yyyy')}</time>;
    }

    return (
        <div className="my-2">

            <div className="flex items-center">
                <div>
                    <Button className="flex items-center" color="primary" onClick={() => createProject()}>
                        <div className="material-symbols-outlined lg:text-button text-xs">add</div>
                        <div className="lg:text-button text-xs">Create New Project</div>
                    </Button>
                </div>
                <div className="ml-6 w-1/2">
                    <Input
                        type="text" className="my-2" name="searchKey"
                        key="searchKey" onChange={handleChange}
                        placeholder="Search ..."
                        labelPlacement="outside"
                        startContent={
                            <div className="material-symbols-outlined lg:text-button text-xs">search</div>
                        }
                    />
                </div>
            </div>
            <div className="my-6">
                <Table
                    aria-label="Example table with client side pagination"
                    bottomContent={
                        <div className="flex w-full justify-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="secondary"
                                page={page}
                                total={pages}
                                onChange={(page) => setPage(page)}
                            />
                        </div>
                    }
                    classNames={{
                        wrapper: "min-h-[222px]",
                    }}
                >
                    <TableHeader>
                        <TableColumn key="id">Id</TableColumn>
                        <TableColumn key="project_name">Project Name</TableColumn>
                        <TableColumn key="description">Project Description</TableColumn>
                        <TableColumn key="created_at">Project Creation Date</TableColumn>
                        <TableColumn key="token">Token</TableColumn>
                    </TableHeader>
                    <TableBody items={items}>
                        {(item) => (
                            <TableRow key={item.id} onClick={() => openProject(item.id)} className="cursor-pointer">
                                {(columnKey) =>
                                    <TableCell>
                                        {
                                            columnKey !== 'created_at' && getKeyValue(item, columnKey)
                                        }
                                        {
                                            columnKey == 'created_at' && timeToString(item.createdAt)
                                        }
                                    </TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}