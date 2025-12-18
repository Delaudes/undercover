import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { RouterWrapper } from "./router.wrapper";

@Injectable()
export class AngularRouterWrapper implements RouterWrapper {
    constructor(private router: Router) { }

    navigateTo(path: string): void {
        this.router.navigate([path]);
    }
}