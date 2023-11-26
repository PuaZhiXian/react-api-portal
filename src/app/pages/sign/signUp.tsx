import {IType} from "@/interface/i-type";
import React from "react";
import Form from "@/components/form";
import {Button} from "@nextui-org/react";
import {IUserDetail} from "@/interface/i-user-detail";
import {login} from "@/service/Authorization/Authorization";

export default function SignUpPage() {
    const formDate: IUserDetail = {
        email: '',
        organisation: ''
    }

    const type: IType[] = [
        {
            type: 'string',
            key: 'email',
            name: 'email',
            placeholder: 'Email',
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessage: 'Please Enter Valid Email'
        },
        {
            type: 'string',
            key: 'organisation',
            name: 'organisation',
            placeholder: 'Organisation',
        },

    ]

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const result = await login(formDate)
            .then((response) => response.json())
            .then((json) => console.log(json));


        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     body: JSON.stringify(formDate),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));
    };

    return (
        <div>
            <div className="text-label w-full text-[#8898aa] mb-4 text-center">Sign Up</div>

            <Form formData={formDate} type={type}/>

            <div className="text-center">
                <Button color="primary" type={'submit'} onClick={handleSubmit}
                        className="text-white py-[10px] px-[20px] my-[24px] h-full rounded w-3/4 text-button">
                    Request Sign Up
                </Button>
            </div>
        </div>
    )
}