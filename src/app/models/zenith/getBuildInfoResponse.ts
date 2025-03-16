export interface GetBuildInfoResponse {
    id_build: number;
    name_build: string;
    date_build: string;
    id_job: number;
    link_build: string;
    private: boolean;
    id_user: number;
    user:string;
    name_job: string;
    image_job: string;
    display: number;
    isFavourite: boolean;
    pictos: string[];
}