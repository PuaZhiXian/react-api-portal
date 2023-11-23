import React, {useState} from "react";
import {Input} from "@nextui-org/input";
import {IType} from "@/interface/i-type";

export default function Form({formData, type}: { formData: any, type: IType[] }) {
    const [, setFormData] = useState<any>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        formData[name] = value;
        setFormData(values => ({...values, [name]: value}))
    };

    const validate = (key: string, regex: RegExp) => {
        if (formData[key] === null || formData[key] === "") {
            return false;
        } else {
            return formData[key].match(regex) ? false : true;
        }
    }

    return (
        <>
            <form method="POST">
                <div className="mb-3">
                    <div className="w-full">
                        {
                            type.map(value => {
                                return <Input className="my-2" key={value.key} type={value.type} name={value.name}
                                              label={value.placeholder} value={formData[value.key]}
                                              isInvalid={validate(value.key, value.regex)}
                                              color={formData[value.key] === "" ? "default" : validate(value.key, value.regex) ? "danger" : "success"}
                                              errorMessage={validate(value.key, value.regex) && "Please enter a valid email"}
                                              onChange={handleChange}/>
                            })
                        }
                    </div>
                </div>
            </form>
        </>
    );
}