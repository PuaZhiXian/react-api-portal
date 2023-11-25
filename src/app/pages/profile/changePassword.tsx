import {Input} from "@nextui-org/input";
import React, {useState} from "react";
import {Button} from "@nextui-org/react";

export default function ChangePassword() {

    const strongPasswordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const [formData, setFormData] = useState<>(
        {
            password: '',
            newPassword: "",
            rePassword: ""
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        formData[name] = value;
        setFormData(values => ({...values, [name]: value}))
    };

    const resetPassword = () => {
        console.log('reset password ing')
    }

    const validate = (key: string, regex?: RegExp) => {
        if (formData[key] === null || formData[key] === "") {
            return false;
        } else {
            return formData[key].match(regex) ? false : true;
        }
    }

    const validateMatch = (key1: string, key2: string) => {

        if (formData[key1] === '' || formData[key2] === '') {
            return false;
        }

        if (formData[key1] === formData[key2]) {
            return false;
        } else {
            return true;
        }

    }

    return (
        <div>
            <form method="POST">
                <div className="my-3">
                    <Input type="password" onChange={handleChange} name="password"
                           label="Old Password" className="max-w-xs"/>
                </div>
                <div className="my-3">
                    <Input type="password" onChange={handleChange} name="newPassword"
                           isInvalid={validate("newPassword", strongPasswordRegex)}
                           color={formData["newPassword"] === "" ? "default" : validate("newPassword", strongPasswordRegex) ? "danger" : "success"}
                           errorMessage={validate("newPassword", strongPasswordRegex) && "Weak Password"}
                           label="New Password" className="max-w-xs"/>
                </div>
                <div className="my-3">
                    <Input type="password" onChange={handleChange} name="rePassword"
                           isInvalid={validateMatch("newPassword", "rePassword")}
                           color={formData["rePassword"] === "" ? "default" : validateMatch("newPassword", "rePassword") ? "danger" : "success"}
                           errorMessage={validateMatch("newPassword", "rePassword",) && "Not Match"}
                           label="Confirm New Password" className="max-w-xs"/>
                </div>

                <div className="mt-4 flex">
                    <div className="primary-button">
                        <Button color="primary" className="w-full text-white px-[32px] text-center rounded-lg"
                                onClick={() => resetPassword()}>
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}