export interface ProjectOverview {
    project_name: string,
    description: string,
    id: number,
    createdAt: Date | string,
    token: string,
    apiCollection?: number[],
    view?: boolean
}
