import { inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { CanActivateFn, Router } from "@angular/router";
import { LocalStorageService } from "../services/data/localStorageService";
import { KeyEnum } from "../models/enum/keyEnum";
import { NO_BUILD } from "../models/utils/utils";

export const buildIdGuard: CanActivateFn = () => {
    const platformId = inject(PLATFORM_ID);
    const router = inject(Router);

    if (!isPlatformBrowser(platformId)) {
        return true;
    }

    const buildId = NO_BUILD;


    return router.createUrlTree(["/", buildId]);
};
