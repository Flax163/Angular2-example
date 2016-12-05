import { Injectable }           from '@angular/core';
import { CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot }  from '@angular/router';

import { HomeLibraryComponent } from '../library/component/homelibrary/home.library.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<HomeLibraryComponent> {

    canDeactivate(
        component: HomeLibraryComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> | boolean {
        console.log('can deactivate guard');
        console.log(state.url);
        return true;
    }
}