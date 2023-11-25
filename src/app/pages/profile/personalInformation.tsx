import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import React, {useState} from "react";
import {IPersonalInformation} from "@/interface/i-personal-information";

export default function PersonalInformation() {

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const [personalInformation, setPersonalInformation] = useState<IPersonalInformation>(
        {email: "zhixianpua2001@gmail.com", organisation: "Um Library", username: "Pua Zhi Xian"}
    )

    const saveProfile = () => {
        console.log('saving update')
        setIsEdit(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        personalInformation[name] = value;
        setPersonalInformation(values => ({...values, [name]: value}))
    };

    return (
        <div>
            <form method="POST">
                <div className="my-3">
                    <Input type="text" isReadOnly={!isEdit} onChange={handleChange} name="username"
                           label="Username" value={personalInformation.username} className="max-w-xs"/>
                </div>
                <div className="my-3">
                    <Input type="email" isReadOnly name="email"
                           label="Email" value={personalInformation.email} className="max-w-xs"/>
                </div>
                <div className="my-3">
                    <Input type="text" isReadOnly name="organisation"
                           label="Organisation" value={personalInformation.organisation} className="max-w-xs"/>
                </div>

                <div className="mt-4 primary-button">
                    {
                        !isEdit &&
                        <Button color={'primary'} className=" font-bold text-white
                            text-center rounded-lg" onClick={() => setIsEdit(true)}>
                            Update Profile
                        </Button>
                    }
                    {
                        isEdit &&
                        <Button color={'primary'} className=" font-bold text-white
                            text-center rounded-lg" onClick={() => saveProfile()}>
                            Save
                        </Button>
                    }
                </div>

            </form>
        </div>
    )
}