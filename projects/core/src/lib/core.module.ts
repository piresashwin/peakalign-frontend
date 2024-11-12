import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AppLayoutComponent } from "./components/app-layout/app-layout.component";
import { ThemeModule } from "@theme";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CdkMenuModule } from '@angular/cdk/menu';
import { RouterModule } from "@angular/router";
import { UserProfileMenuComponent } from './ui/user-profile-menu/user-profile-menu.component';
import { SessionsMenuComponent } from './ui/sessions-menu/sessions-menu.component';


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        AppLayoutComponent,
        UserProfileMenuComponent,
        SessionsMenuComponent,
    ],
    imports: [
        CommonModule,
        ThemeModule,
        FormsModule,
        ReactiveFormsModule,
        CdkMenuModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        AppLayoutComponent,
        ThemeModule,
        FormsModule,
        ReactiveFormsModule,
        CdkMenuModule,
        RouterModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PeakCoreModule {
}