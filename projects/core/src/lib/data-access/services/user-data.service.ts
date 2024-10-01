import { AuthService, ConfigStateService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { CompanyDto, CompanyService } from '@proxy/setup';
import { BehaviorSubject, combineLatest, filter, first, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private GlobalConfig = new BehaviorSubject<any>(null);
  GlobalConfig$ = this.GlobalConfig.asObservable();

  constructor(private authService: AuthService
    , private config: ConfigStateService
    , private companyService: CompanyService) { }

  loadUserData() {
    if (!this.authService.isAuthenticated)
      return of();

    return combineLatest([this.config.getOne$("currentUser"), this.config.getOne$("currentTenant")])
      .pipe(
        filter(([user, tenant]) => user != null && tenant != null),
        switchMap(([user, tenant]) => {
          return this.companyService.get(tenant.id)
            .pipe(map(company => {
              return [user, tenant, company];
            }))
        }),
        tap(([user, tenant, company]) => {
          const obj = {
            user,
            tenant,
            company,
          }

          this.GlobalConfig.next(obj);
        })
      )

  }
}
