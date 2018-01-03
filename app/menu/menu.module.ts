import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { MenuRouting } from "./menu.routes";
import { MenuComponent } from "./menu.component";

@NgModule({
  imports: [
    NativeScriptModule,
    MenuRouting
  ],
  declarations: [
    MenuComponent
  ]
})
export class MenuModule {}
