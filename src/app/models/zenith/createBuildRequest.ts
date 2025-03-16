export interface CreateBuildRequest {
    flags: string[];
    id_job: number;
    is_visible: boolean;
    level: number;
    name: string;
}