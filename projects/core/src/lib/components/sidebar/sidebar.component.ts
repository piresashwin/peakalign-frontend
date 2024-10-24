import { SubscriptionService } from '@abp/ng.core';
import { Component, Inject, OnInit } from '@angular/core';
import { ROUTE_TOKEN, SidebarMenu, UserDataService } from '@core';
import { SessionDto, SessionsService } from '@proxy/okrs';
import { CreateSessionModalComponent } from 'projects/okr/src/lib/features/create-session-modal/create-session-modal.component';
import { DialogService } from 'projects/theme/src/lib/services/dialog.service';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'pa-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers: [SubscriptionService]
})
export class SidebarComponent implements OnInit {

  isSessionAvailable = false;

  selectedSessionKey: string;

  menus: SidebarMenu[] = [{
    title: "Menu",
    items: [
      {
        title: "Dashboard",
        icon: "dashboard.svg",
        activeIcon: "dashboard-active.svg",
        url: "/dashboard"
      },
      {
        title: "OKR Management",
        icon: "okr.svg",
        activeIcon: "",
        url: "/okr/home"
      },
      {
        title: "Performance Management",
        icon: "performance.svg",
        activeIcon: "",
        url: "/performance/home"
      },
      {
        title: "Employee Management",
        icon: "employee.svg",
        activeIcon: "",
        url: "/employees"
      },
      {
        title: "Integration Settings",
        icon: "integration.svg",
        activeIcon: "",
        url: "/intergation"
      },
      {
        title: "Report & Analytics",
        icon: "report.svg",
        activeIcon: "",
        url: "/reports"
      }

    ],

  },
  {
    title: "General",
    items: [
      {
        title: "Settings",
        icon: "settings.svg",
        activeIcon: "",
        url: "/settings"
      },
      {
        title: "Help & Support",
        icon: "help.svg",
        activeIcon: "",
        url: "/help"
      },
    ]
  }
  ]

  sessions: SessionDto[] = [];

  globalConfig: any;

  /**
   *
   */
  constructor(private dialogService: DialogService, private subscriptions: SubscriptionService
    , private userDataService: UserDataService
    , private sessionsService: SessionsService
  ) {

  }
  ngOnInit(): void {
    this.fetchSessions();
  }


  fetchSessions() {
    const obs$ = this.userDataService.GlobalConfig$.pipe(
      filter(x => x != null),
      switchMap(obj => {
        return this.sessionsService.getList()
          .pipe(
            map(x => x.map(x => ({ ...x, key: x.id }))),
            map(x => ({ sessions: x, obj }))
          )
      })
    )

    this.subscriptions.addOne(obs$, ({ sessions, obj }) => {
      this.isSessionAvailable = !!sessions.length
      this.sessions = sessions;
      this.selectedSessionKey = obj?.session?.id ?? this.sessions[0]?.id;
    })
  }


  openNewSessionModal() {
    const obs$ = this.dialogService.open(CreateSessionModalComponent, {
      data: {}
    }).pipe(filter(response => response != "cancel"))

    this.subscriptions.addOne(obs$, (response) => {

    })
  }

  get currentSession() {
    return this.selectedSessionKey ? this.sessions.find(x => x.id == this.selectedSessionKey) : "";
  }

  sessionChange(session) {
    this.selectedSessionKey = session.id;
  }

}
