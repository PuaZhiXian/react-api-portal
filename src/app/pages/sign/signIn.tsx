'use client';
import {Button} from "@nextui-org/react";
import React, {useState} from "react";
import Form from "@/components/form";
import {IType} from "@/interface/i-type";
import {ILogin} from "@/interface/i-login";

interface FormData {
    email: string;
    password: string;
}

export default function SignInPage() {

    const [formData, setFormData] = useState<ILogin>({
        email: '',
        password: ''
    });

    const formDate = {
        email: '',
        password: ''
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
            type: 'password',
            key: 'password',
            name: 'password',
            placeholder: 'Password',
            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            errorMessage: 'Week Password'
        },

    ]


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        console.log('changing')
        setFormData((prevData: FormData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    return (
        <div>
            <div className="text-label w-full text-[#8898aa] mb-4 text-center">Sign In</div>

            <Form formData={formData} type={type}/>
            {/*<form method="POST">
                <div className="mb-3">
                    <div className="w-full">
                        <Input type="email" label="Email" name="Email" value={formData.email}
                               className="my-5"
                               onChange={handleChange}/>
                        <Input type="password" label="Password" name="Password" value={formData.password}
                               className=""
                               onChange={handleChange}/>
                    </div>
                </div>
            </form>*/}

            <div className="text-center">
                <Button color="primary" type={'submit'} onClick={handleSubmit}
                        className="text-white py-[10px] px-[20px] my-[24px] h-full rounded w-3/4 text-button">
                    Sign In
                </Button>
            </div>

            <div className="text-danger flex justify-center cursor-pointer text-xs ">
                Forget Password ?
            </div>

            <div className="flex justify-center text-xs">
                <div>New to API Developer Portal?</div>
                <div className="text-danger cursor-pointer ml-1"> Join Now</div>
            </div>
        </div>
    )
}