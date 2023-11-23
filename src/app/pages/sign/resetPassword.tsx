import React from "react";
import Form from "@/components/form";
import {Button} from "@nextui-org/react";

export default function ResetPasswordPage() {
    const formDate: any = {
        password: '',
        repassword: ''
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(formDate),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    return (
        <div>
            <div className="text-label w-full text-[#8898aa] mb-4 text-center">Reset Password</div>

            <Form formData={formDate} checkPassword={true}/>

            <div className="text-center">
                <Button color="primary" type={'submit'} onClick={handleSubmit}
                        className="text-white py-[10px] px-[20px] my-[24px] h-full rounded w-3/4 text-button">
                    Reset Password
                </Button>
            </div>

        </div>
    )
}