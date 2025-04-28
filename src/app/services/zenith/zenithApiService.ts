import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CreateBuildResponse } from "../../models/zenith/createBuildResponse";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { GetBuildInfoResponse } from "../../models/zenith/getBuildInfoResponse";
import { AddItemRequest } from "../../models/zenith/addItemRequest";
import { CreateBuildRequest } from "../../models/zenith/createBuildRequest";
import { BuildResponse } from "../../models/zenith/buildResponse";

@Injectable({providedIn: 'root'})
export class ZenithApiService {
    private readonly urlZenith = "https://api.zenithwakfu.com/builder/api/";
    private readonly headers = new HttpHeaders({
        "Host": "api.zenithwakfu.com",
        "Origin": "https://zenithwakfu.com",
        "Referer": "https://zenithwakfu.com/",
        "X-Requested-With": "XMLHttpRequest"
    });

    constructor(private http: HttpClient) {}

    public createBuild(data: CreateBuildRequest): Observable<CreateBuildResponse> {
        return this.http.post<CreateBuildResponse>(this.urlZenith + "create", data, {headers: this.headers});
    }

    public getBuildInfo(link: string): Observable<GetBuildInfoResponse> {
        return this.http.get<GetBuildInfoResponse>(this.urlZenith + "infos/build/" + link, {headers: this.headers});
    }

    public addItemRequest(data: AddItemRequest): Observable<void> {
        return this.http.post<void>(this.urlZenith + "equipment/add", data, {headers: this.headers});
    }

    public getBuild(id: string):  Observable<BuildResponse> {
        return this.http.get<BuildResponse>(this.urlZenith + "build/" + id, {headers: this.headers});
    }
}