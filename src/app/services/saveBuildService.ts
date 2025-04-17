import { Injectable } from "@angular/core";
import { LocalStorageService } from "./data/localStorageService";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../models/enum/keyEnum";
import { Build } from "../models/data/build";

@Injectable({providedIn: 'root'})
export class SaveBuildService {

    private buildList = new BehaviorSubject<Build[]>([]);
    public buildList$ = this.buildList.asObservable();
    
    constructor(private localStorageService: LocalStorageService) {
        const savedBuilds = this.localStorageService.getItem<Build[]>(KeyEnum.KEY_SAVE_BUILD) || [];
        this.buildList.next(savedBuilds);
    }

    public addBuild(build: string): void {
        if(!build) return; // Avoid adding empty builds
        const currentBuilds = this.buildList.getValue()
        const codeBuildsList = currentBuilds.map(b => b.codeBuild);
        if (!codeBuildsList.includes(build)) {
            const newBuild: Build = { codeBuild: build };
            currentBuilds.unshift(newBuild);
            this.buildList.next(currentBuilds);
            this.localStorageService.setItem(KeyEnum.KEY_SAVE_BUILD, currentBuilds);
        }
    }

    public removeBuild(build: string): void {
        if(!build) return; // Avoid removing empty builds
        const currentBuilds = this.buildList.getValue();
        const updatedBuilds = currentBuilds.filter(b => b.codeBuild !== build);
        this.buildList.next(updatedBuilds);
        this.localStorageService.setItem(KeyEnum.KEY_SAVE_BUILD, updatedBuilds);
    }
}