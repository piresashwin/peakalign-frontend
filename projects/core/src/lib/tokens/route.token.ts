import { InjectionToken } from "@angular/core"

const ROUTE_TOKEN = new InjectionToken<SidebarMenu>(null);

interface MenuItem {
    title: string,
    url: string,
    icon: string,
    activeIcon: string,
}

interface SidebarMenu {
    title: string,
    items: MenuItem[]
}


export { ROUTE_TOKEN, MenuItem, SidebarMenu } 
