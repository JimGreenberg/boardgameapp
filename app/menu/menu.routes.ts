import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MenuComponent } from "./menu.component";


const menuRoutes: Routes = [
  { path: "menu", component: MenuComponent }
];
export const MenuRouting: ModuleWithProviders = RouterModule.forChild(menuRoutes);
