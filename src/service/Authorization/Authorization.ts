import {environment} from "@/environment";
import {IUserDetail} from "@/interface/i-user-detail";
import {IMessage} from "@/interface/i-message";

const ProjectUrl = environment.apiUrl + '/api'


export async function login(loginRequest: IUserDetail): Promise<IMessage> {
    const response = await fetch(`${(ProjectUrl)}/custom/login`, {
        method: 'POST',
        body: JSON.stringify(loginRequest),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        credentials: 'include'
    })
    const data: IMessage = await response.json();
    return data;
}