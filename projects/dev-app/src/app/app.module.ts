import { CoreModule, provideAbpCore, withOptions } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { provideAbpOAuth } from '@abp/ng.oauth';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OKRConfigModule } from '@peak-align/okr/config';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { PeakCoreModule } from '@core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    OKRConfigModule.forRoot(),
    PeakCoreModule,
  ],
  providers: [
    APP_ROUTE_PROVIDER,
    provideAbpCore(
      withOptions({
        environment,
        registerLocaleFn: registerLocale(),
        sendNullsAsQueryParam: false,
        skipGetAppConfiguration: false,
      })
    ),
    provideAbpOAuth(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
