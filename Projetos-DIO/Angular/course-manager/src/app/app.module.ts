import { CourseInfoComponent } from './courses/course-info.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list-component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/release.pip';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseInfoComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // para trabalhar com http
    RouterModule.forRoot([ // server para criar as rotas da aplicacao
    {
      path: 'courses', component: CourseListComponent // rota criada para o componente de lista cursos
    }, 
    {
      path: 'courses/info/:id', component: CourseInfoComponent // criando rota para info-component
    }, 
    {
        path: '', redirectTo: 'courses', pathMatch:'full' // esta rota corresponde a raiz a da aplicacao, ele redireciona para o caminho do componente de lista de cursos.
      },
      {
        path: '**', component: Error404Component // esta rota corresponde a um direcionamento nao existente, ela direciona para o compoenente de error 404.
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
