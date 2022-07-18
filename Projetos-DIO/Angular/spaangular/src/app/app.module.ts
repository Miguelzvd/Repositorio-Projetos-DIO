import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ModelComponent } from './model/model.component';


@NgModule({
  declarations: [ // para declarar componentes.
    AppComponent,
     HomeComponent,
     ProfessoresComponent,
     AlunosComponent,
     ModelComponent
    ], 
  imports: [ //para declarar modulos.
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
