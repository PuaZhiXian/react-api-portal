import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import React from "react";
import {format} from "date-fns";
import {IProjectStatistics} from "@/interface/i-project-statistics";

export default function Statistics({projectId}: { projectId: number }) {

    const tableData: IProjectStatistics[] = [
        {
            id: 1,
            timestamp: new Date("2019-06-28T08:15:42.000Z"),
            api: "api name 1",
            method: "GET",
            responseSize: 250,
            responseTime: 150,
            status: "200"
        },
        {
            id: 2,
            timestamp: new Date("2020-11-15T14:27:56.000Z"),
            api: "api name 2",
            method: "POST",
            responseSize: 320,
            responseTime: 180,
            status: "201"
        },
        {
            id: 3,
            timestamp: new Date("2018-09-01T19:50:23.000Z"),
            api: "api name 3",
            method: "GET",
            responseSize: 120,
            responseTime: 90,
            status: "200"
        },
        {
            id: 4,
            timestamp: new Date("2021-05-10T10:35:17.000Z"),
            api: "api name 4",
            method: "PUT",
            responseSize: 180,
            responseTime: 120,
            status: "200"
        },
        {
            id: 5,
            timestamp: new Date("2022-03-07T07:58:04.000Z"),
            api: "api name 5",
            method: "GET",
            responseSize: 420,
            responseTime: 200,
            status: "200"
        },
        {
            id: 6,
            timestamp: new Date("2023-01-18T15:40:53.000Z"),
            api: "api name 6",
            method: "POST",
            responseSize: 280,
            responseTime: 160,
            status: "201"
        },
        {
            id: 7,
            timestamp: new Date("2020-07-26T09:52:35.000Z"),
            api: "api name 7",
            method: "GET",
            responseSize: 200,
            responseTime: 100,
            status: "200"
        },
        {
            id: 8,
            timestamp: new Date("2022-08-12T12:05:12.000Z"),
            api: "api name 8",
            method: "PUT",
            responseSize: 150,
            responseTime: 80,
            status: "200"
        },
        {
            id: 9,
            timestamp: new Date("2021-03-05T17:18:29.000Z"),
            api: "api name 9",
            method: "GET",
            responseSize: 300,
            responseTime: 180,
            status: "200"
        },
        {
            id: 10,
            timestamp: new Date("2019-12-02T21:31:07.000Z"),
            api: "api name 10",
            method: "POST",
            responseSize: 400,
            responseTime: 220,
            status: "201"
        }
    ]

    function timeToString(dateTime: Date) {
        return <time dateTime={dateTime.toISOString()}>{format(dateTime, 'LLLL d, yyyy')}</time>;
    }

    return (
        <div>
            <div className="font-bold text-[20px]">Api Log Access</div>

            <div className="my-6">
                <Table
                    aria-label="Example table with client side pagination"
                    classNames={{
                        wrapper: "min-h-[222px]",
                    }}>
                    <TableHeader>
                        <TableColumn key="timestamp">Timestamp</TableColumn>
                        <TableColumn key="api">API</TableColumn>
                        <TableColumn key="method">Method</TableColumn>
                        <TableColumn key="responseSize">Response Size/KB</TableColumn>
                        <TableColumn key="responseTime">Response Time/ms</TableColumn>
                        <TableColumn key="status">Status</TableColumn>
                    </TableHeader>
                    <TableBody items={tableData}>
                        {(item) => (
                            <TableRow key={item.id}>
                                {(columnKey) =>
                                    <TableCell>
                                        {
                                            columnKey !== 'timestamp' && getKeyValue(item, columnKey)
                                        }
                                        {
                                            columnKey == 'timestamp' && timeToString(item.timestamp)
                                        }
                                    </TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}