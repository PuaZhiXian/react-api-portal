export interface IProjectStatistics {
    id: number,
    timestamp: Date;
    api: string;
    method: string;
    responseSize: number;
    responseTime: number;
    status: string;
}
