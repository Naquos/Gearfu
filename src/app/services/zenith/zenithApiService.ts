import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CreateBuildResponse } from "../../models/zenith/createBuildResponse";
import { forkJoin, Observable } from "rxjs";
import { inject, Injectable } from "@angular/core";
import { GetBuildInfoResponse } from "../../models/zenith/getBuildInfoResponse";
import { AddItemRequest } from "../../models/zenith/addItemRequest";
import { CreateBuildRequest } from "../../models/zenith/createBuildRequest";
import { BuildResponse } from "../../models/zenith/buildResponse";
import { CustomStatisticsUpdate } from "../../models/zenith/customStatisticsUpdate";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { EquipEffects } from "../../models/data/equipEffects";
import { AptitudeType } from "../../models/zenith/aptitudeType";
import { EnchantResponse } from "../../models/zenith/enchantResponse";

@Injectable({ providedIn: 'root' })
export class ZenithApiService {
    private readonly http = inject(HttpClient);
    private readonly urlZenith = "https://api.zenithwakfu.com/builder/api/";
    private readonly headers = new HttpHeaders({
        "Host": "api.zenithwakfu.com",
        "Origin": "https://zenithwakfu.com",
        "Referer": "https://zenithwakfu.com/",
        "X-Requested-With": "XMLHttpRequest"
    });
    private ELEMENTS_MAITRISES = [IdActionsEnum.MAITRISES_FEU, IdActionsEnum.MAITRISES_EAU, IdActionsEnum.MAITRISES_TERRE, IdActionsEnum.MAITRISES_AIR];
    private ELEMENTS_RESISTANCES = [IdActionsEnum.RESISTANCES_FEU, IdActionsEnum.RESISTANCES_EAU, IdActionsEnum.RESISTANCES_TERRE, IdActionsEnum.RESISTANCES_AIR];

    public createBuild(data: CreateBuildRequest): Observable<CreateBuildResponse> {
        return this.http.post<CreateBuildResponse>(this.urlZenith + "create", data, { headers: this.headers });
    }

    public getBuildInfo(link: string): Observable<GetBuildInfoResponse> {
        return this.http.get<GetBuildInfoResponse>(this.urlZenith + "infos/build/" + link, { headers: this.headers });
    }

    public addItemRequest(data: AddItemRequest): Observable<void> {
        return this.http.post<void>(this.urlZenith + "equipment/add", data, { headers: this.headers });
    }

    public getBuild(id: string): Observable<BuildResponse> {
        return this.http.get<BuildResponse>(this.urlZenith + "build/" + id, { headers: this.headers });
    }

    public getAptitudeTypes(id: string): Observable<AptitudeType[]> {
        return this.http.get<AptitudeType[]>(this.urlZenith + "aptitudes/" + id, { headers: this.headers });
    }

    public getEnchants(id: string): Observable<EnchantResponse> {
        return this.http.get<EnchantResponse>(this.urlZenith + "enchants/" + id, { headers: this.headers });
    }

    private prepareRequestsCustomStatistics(customStatistics: CustomStatisticsUpdate, nbElements: number, elementsList: IdActionsEnum[]): Observable<void[]> {
        const requests$ = [];
        for (let i = 0; i < nbElements; i++) {
            const customStatisticsElement = {
                id_build: customStatistics.id_build,
                id_stats: elementsList[i],
                value: customStatistics.value
            };
            requests$.push(this.uniqueUpdateCustomStatistics(customStatisticsElement));
        }
        return forkJoin(requests$);
    }

    public updateCustomStatistics(customStatistics: CustomStatisticsUpdate, equipEffect: EquipEffects): Observable<void[]> {
        if (customStatistics.id_stats === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE) {
            return this.prepareRequestsCustomStatistics(customStatistics, equipEffect.params[2], this.ELEMENTS_MAITRISES);
        } else if (customStatistics.id_stats === IdActionsEnum.MAITRISES_ELEMENTAIRES) {
            return this.prepareRequestsCustomStatistics(customStatistics, 4, this.ELEMENTS_MAITRISES);
        } else if (customStatistics.id_stats === IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE) {
            return this.prepareRequestsCustomStatistics(customStatistics, equipEffect.params[2], this.ELEMENTS_RESISTANCES);
        } else if (customStatistics.id_stats === IdActionsEnum.RESISTANCES_ELEMENTAIRE) {
            return this.prepareRequestsCustomStatistics(customStatistics, 4, this.ELEMENTS_RESISTANCES);
        }
        return forkJoin([this.uniqueUpdateCustomStatistics(customStatistics)]);
    }

    private uniqueUpdateCustomStatistics(customStatistics: CustomStatisticsUpdate): Observable<void> {
        return this.http.post<void>(this.urlZenith + "customstatistics/update", customStatistics, { headers: this.headers });
    }
}