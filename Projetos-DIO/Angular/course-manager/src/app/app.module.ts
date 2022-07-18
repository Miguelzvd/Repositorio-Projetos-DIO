import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course-module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // para trabalhar com http
    CourseModule,
    CoreModule,
    RouterModule.forRoot([ // server para criar as rotas para a aplicacao
      {
        path: '', redirectTo: 'courses', pathMatch:'full' // esta rota corresponde a raiz a da aplicacao, ele redireciona para o caminho do componente de lista de cursos.
      },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
