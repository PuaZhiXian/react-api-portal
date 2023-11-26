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
import React, {useEffect, useState} from "react";
import {ProjectOverview} from "@/interface/project-overview";
import {format, parseISO} from 'date-fns';
import {RedirectType} from "next/dist/client/components/redirect";
import {useRouter} from "next/navigation";
import {allProject} from "@/service/project/Project";

export default function ProjectTable() {
    const router = useRouter()
    const [searchKey, setSearchKey] = useState('');
    const [projects, setProject] = useState<ProjectOverview[]>([]);

    useEffect(() => {
        initializeVariable()
    }, []);

    const initializeVariable = async () => {
        const data = await allProject();
        setProject(data);
    };
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
            item.project_name?.toLowerCase().includes(searchKey.toLowerCase())
        );

        return filteredData.slice(start, end);
    }, [page, projects]);

    const openProject = (projectId: number) => {
        router.replace('/pages/project', RedirectType.replace)
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
                                            columnKey !== 'created_at' && columnKey !== 'token' && getKeyValue(item, columnKey)
                                        }
                                        {
                                            columnKey == 'created_at' && timeToString(item.createdAt)
                                        }
                                        {
                                            columnKey == 'token' && <p>********</p>
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