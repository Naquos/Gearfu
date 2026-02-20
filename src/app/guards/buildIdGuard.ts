import { inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { CanActivateFn, Router } from "@angular/router";
import { LocalStorageService } from "../services/data/localStorageService";
import { KeyEnum } from "../models/enum/keyEnum";
import { NO_BUILD } from "../models/utils/utils";

export const buildIdGuard: CanActivateFn = () => {
    const platformId = inject(PLATFORM_ID);
    const router = inject(Router);
    const localStorageService = inject(LocalStorageService);

    if (!isPlatformBrowser(platformId)) {
        return true;
    }

    const storedId = localStorageService.getItem<string>(KeyEnum.KEY_BUILD_ID);
    const buildId = storedId && storedId.trim() ? storedId : NO_BUILD;

    if (!storedId || !storedId.trim()) {
        localStorageService.setItem<string>(KeyEnum.KEY_BUILD_ID, buildId);
    }

    return router.createUrlTree(["/", buildId]);
};
