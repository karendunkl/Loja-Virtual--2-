import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const produtoRouterConfig: Routes = [
    { path: '', component: ProdutoDashboardComponent}
]; 

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [ RouterModule ]
})

export class ProdutoRoutingModule {}