import { AuthService, ConfigStateService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { SessionDto, SessionsService } from '@proxy/okrs';
import { CompanyService } from '@proxy/setup';
import { BehaviorSubject, combineLatest, filter, first, map, of, switchMap, tap } from 'rxjs';

export interface GlobalConfig {
  session?: SessionDto,
  user?: any
  tenant?: any,
  company?: any
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private GlobalConfig = new BehaviorSubject<GlobalConfig>(null);
  GlobalConfig$ = this.GlobalConfig.asObservable();

  private sessions = new BehaviorSubject<SessionDto[]>([])
  sessions$ = this.sessions.asObservable();

  constructor(private authService: AuthService
    , private config: ConfigStateService
    , private companyService: CompanyService
    , private sessionService: SessionsService) { }

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
        switchMap(([user, tenant, company]) => {
          return this.sessionService.getList().pipe(
            map(sessions => ([user, tenant, company, sessions]))
          )
        }),
        tap(([user, tenant, company, sessions]: any) => {
          const obj = {
            user,
            tenant,
            company,
            session: sessions[0]
          }

          this.GlobalConfig.next(obj);
        })
      )
  }

  setCurrentSession(session: SessionDto) {
    const obj = this.GlobalConfig.value;
    obj.session = session;

    this.GlobalConfig.next(obj);
  }

  addSession(session: SessionDto) {
    this.sessions.next([...this.sessions.value, session]);
  }

  removeSession(session: SessionDto) {
    this.sessions.next(
      this.sessions.value.filter(x => x.id != session.id)
    )

  }
}
