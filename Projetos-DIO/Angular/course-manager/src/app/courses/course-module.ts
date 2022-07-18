import { AppPipeModule } from './../shared/pipe/app-pipe-module';
import { StarModule } from './../shared/component/star/star.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list-component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        FormsModule,
        StarModule,
        AppPipeModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent // rota criada para o componente de lista cursos
            }, 
            {
                path: 'courses/info/:id', component: CourseInfoComponent // criando rota para info-component
            }, 
        ])
    ]
})

export class CourseModule {

}