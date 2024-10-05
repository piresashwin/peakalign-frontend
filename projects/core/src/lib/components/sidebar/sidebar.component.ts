import { Component, Inject } from '@angular/core';
import { ROUTE_TOKEN, SidebarMenu } from '@core';

@Component({
  selector: 'pa-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

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

  /**
   *
   */
  constructor() {

  }

}
