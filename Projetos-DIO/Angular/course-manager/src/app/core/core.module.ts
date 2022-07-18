import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { Error404Component } from './component/error-404/error-404.component';

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Error404Component// esta rota corresponde a um direcionamento nao existente, ela direciona para o compoenente de error 404.
            },
        ])
    ],
    exports: [
        NavBarComponent // A nav bar utiliza o routerlink e por isso se torna necessario a importacao do RouterModule.
    ]
})

export class CoreModule {

}