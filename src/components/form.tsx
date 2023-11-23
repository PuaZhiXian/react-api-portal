import React, {useState} from "react";
import {Input} from "@nextui-org/input";
import {IType} from "@/interface/i-type";

export default function Form({
                                 formData,
                                 type,
                                 checkPassword
                             }: { formData: any, type: IType[], checkPassword: boolean }) {

    const strongPasswordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const [, setFormData] = useState<any>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        formData[name] = value;
        setFormData(values => ({...values, [name]: value}))
    };

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
            console.log('same')
            return false;
        } else {
            console.log('not smae')
            return true;
        }

    }


    return (
        <>
            <form method="POST">
                <div className="mb-3">
                    <div className="w-full">
                        {
                            !checkPassword && type.map(value => {
                                return <Input className="my-2" key={value.key} type={value.type} name={value.name}
                                              label={value.placeholder} value={formData[value.key]}
                                              isInvalid={validate(value.key, value.regex)}
                                              color={formData[value.key] === "" ? "default" : validate(value.key, value.regex) ? "danger" : "success"}
                                              errorMessage={validate(value.key, value.regex) && value.errorMessage}
                                              onChange={handleChange}/>
                            })
                        }
                        {
                            checkPassword && (
                                <>
                                    <Input className="my-2" key="password" type="password" name="password"
                                           label="Password" value={formData["password"]}
                                           isInvalid={validate("password", strongPasswordRegex)}
                                           color={formData["password"] === "" ? "default" : validate("password", strongPasswordRegex) ? "danger" : "success"}
                                           errorMessage={validate("password", strongPasswordRegex) && "Weak Password"}
                                           onChange={handleChange}/>
                                    <Input className="my-2" key="repassword" type="password" name="repassword"
                                           label="Re-Enter Password" value={formData["repassword"]}
                                           isInvalid={validateMatch("password", "repassword")}
                                           color={formData["repassword"] === "" ? "default" : validateMatch("password", "repassword") ? "danger" : "success"}
                                           errorMessage={validateMatch("password", "repassword",) && "Not Match"}
                                           onChange={handleChange}/>
                                </>)
                        }
                    </div>
                </div>
            </form>
        </>
    );
}