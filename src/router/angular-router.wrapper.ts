import { inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterWrapper } from "./router.wrapper";

export class AngularRouterWrapper implements RouterWrapper {
    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);

    navigate(path: string): void {
        this.router.navigate([path]);
    }

    getParamValue(paramName: string): string | undefined {
        const paramValue = this.activatedRoute.firstChild?.snapshot.paramMap.get(paramName)
        return paramValue ?? undefined
    }
}