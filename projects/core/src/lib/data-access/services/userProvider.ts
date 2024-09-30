import { APP_INITIALIZER } from "@angular/core";
import { UserDataService } from "./user-data.service";

export function provideUserData() {
    return {
        provide: APP_INITIALIZER,
        useFactory: (userDataService: UserDataService) => () => userDataService.loadUserData(),
        deps: [UserDataService],
        multi: true,
    }
}