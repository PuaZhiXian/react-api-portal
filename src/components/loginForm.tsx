'use client';
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import React, {useState} from "react";

interface FormData {
    title: string;
    body: string;
    userId: string;
}


export default function LoginForm() {

    const [formData, setFormData] = useState<FormData>({
        title: '',
        body: '',
        userId: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
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
        <>
            <form method="POST">
                <div className={'mb-3'}>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input type="text" label="Title" name="title" value={formData.title}
                               onChange={handleChange}/>
                        <Input type="text" label="Body" name="body" value={formData.body}
                               onChange={handleChange}/>
                        <Input type="number" label="User Id" name="userId" value={formData.userId}
                               onChange={handleChange}/>
                    </div>
                </div>
                <Button color="primary" type={'submit'} onClick={handleSubmit}> Button </Button>
            </form>
        </>
    );
}