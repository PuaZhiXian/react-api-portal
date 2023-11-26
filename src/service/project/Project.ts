import {environment} from "@/environment";
import {ProjectOverview} from "@/interface/project-overview";

const ProjectUrl = environment.apiUrl + '/api'


export async function allProject(): Promise<ProjectOverview[]> {
    const response = await fetch(`${(ProjectUrl)}/projects`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        credentials: 'include'
    })
    const data: ProjectOverview[] = await response.json();
    return data;
}