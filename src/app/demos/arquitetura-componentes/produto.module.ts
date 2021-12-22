import { ProdutoRoutingModule } from './produto.route';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        ProdutoDashboardComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: []

})

export class ProdutoModule{}