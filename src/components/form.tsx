import React, {useState} from "react";
import {Input} from "@nextui-org/input";
import {IType} from "@/interface/i-type";
import {ILogin} from "@/interface/i-login";

export default function Form({formData, type}: { formData: ILogin, type: IType[] }) {
    const [setFormData] = useState<any>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('submit')
    };

    return (
        <>
            <form method="POST">
                <div className="mb-3">
                    <div className="w-full">
                        {
                            type.map(value => {
                                console.log(value)
                            })
                        }
                        <Input type="email" label="Em4ail" name="Email" value={formData.email}
                               className="my-5"
                               onChange={handleChange}/>
                        <Input type="password" label="Password" name="Password" value={formData.password}
                               className=""
                               onChange={handleChange}/>
                    </div>
                </div>
            </form>
        </>
    );
}