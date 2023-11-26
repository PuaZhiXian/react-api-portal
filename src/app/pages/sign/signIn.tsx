'use client';
import {Button} from "@nextui-org/react";
import React from "react";
import Form from "@/components/form";
import {IType} from "@/interface/i-type";
import {ILogin} from "@/interface/i-login";
import {useRouter} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {login} from "@/service/Authorization/Authorization";

export default function SignInPage() {

    const router = useRouter()
    const formDate: ILogin = {
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

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const result = await login(formDate)
        if (result.message) {
            window.alert(result.message);
            router.replace('/pages/dashboard', RedirectType.replace)
        } else {
            console.log(result.error)
        }

    };

    const handleRedirect = (path: string) => {

        router.replace(path, RedirectType.replace)
    }

    return (
        <div>
            <div className="text-label w-full text-[#8898aa] mb-4 text-center">Sign In</div>
            <Form formData={formDate} type={type}/>
            <div className="text-center">
                <Button color="primary" type={'submit'} onClick={handleSubmit}
                        className="text-white py-[10px] px-[20px] my-[24px] h-full rounded w-3/4 text-button">
                    Sign In
                </Button>
            </div>

            <div className="text-danger flex justify-center cursor-pointer text-xs "
                 onClick={() => handleRedirect("/sign/forget")}>
                Forget Password ?
            </div>

            <div className="flex justify-center text-xs">
                <div>New to API Developer Portal?</div>
                <div className="text-danger cursor-pointer ml-1" onClick={() => handleRedirect("/sign/sign-up")}> Join
                    Now
                </div>
            </div>
        </div>
    )
}