import {Input} from "@nextui-org/input";
import React from "react";
import {Button, getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {IProjectTokenLog} from "@/interface/i-project-token-log";
import {format} from "date-fns";

export default function Credential({
                                       projectId,
                                       projectName
                                   }: { projectId: number, projectName: string }) {
    const currentSessionToken: string = 'sadfasdfasdfasdf';
    const tokenLog: IProjectTokenLog[] = [
        {
            created_date: new Date("2019-12-02T21:31:07.000Z"),
            expiration_date: new Date("2019-12-02T21:31:07.000Z"),
            token: 'asdajsbdakjsjdnasdnas',
            last_used_date: new Date("2019-12-02T21:31:07.000Z")
        },
        {
            created_date: new Date("2018-12-02T21:31:07.000Z"),
            expiration_date: new Date("2018-12-02T21:31:07.000Z"),
            token: 'asdajsbdakasajsjdnasdnas',
            last_used_date: new Date("2018-12-02T21:31:07.000Z")
        }
    ];
    const handleRequest = () => {

    }

    function timeToString(dateTime: Date) {
        return <time dateTime={dateTime.toISOString()}>{format(dateTime, 'LLLL d, yyyy')}</time>;
    }

    return (
        <div>
            <div className="font-bold text-[20px]">Request JSON Web Token to call {projectName}’s API</div>
            <div className="primary-button mt-3.5 mb-7">
                <Button color="primary" className="font-bold text-[14px] py-2.5 text-white px-[32px]
                    text-center rounded-lg" onClick={() => handleRequest}>
                    Request
                </Button>
            </div>

            <div>
                <div className="font-bold text-[20px]">Encoded JWT</div>
            </div>

            <div>
                <Input type="password" isReadOnly name="password"
                       label="Token" value={currentSessionToken} className="max-w-xs bg-[#F5F5F5]"/>
            </div>

            <div className="my-6">
                <Table
                    aria-label="Example table with client side pagination"
                    classNames={{
                        wrapper: "min-h-[222px]",
                    }}>
                    <TableHeader>
                        <TableColumn key="token">Token</TableColumn>
                        <TableColumn key="created_date">Created</TableColumn>
                        <TableColumn key="expiration_date">Expiration</TableColumn>
                        <TableColumn key="last_used_date">Last Used Date</TableColumn>
                    </TableHeader>
                    <TableBody items={tokenLog}>
                        {(item) => (
                            <TableRow key={item.token}>
                                {(columnKey) =>
                                    <TableCell>
                                        {
                                            columnKey == 'token' && <div>********</div>
                                        }
                                        {
                                            columnKey !== 'token' && timeToString(item[columnKey])
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