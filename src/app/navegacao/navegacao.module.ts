
import { NgModule } from "@angular/core";

import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        MenuComponent,
        FooterComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        MenuComponent,
        FooterComponent,
        HomeComponent
    ]
})

export class NavegacaoModule{

}