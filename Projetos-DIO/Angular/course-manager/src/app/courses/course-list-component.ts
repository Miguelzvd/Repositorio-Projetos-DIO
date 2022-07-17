import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

//No componente principal deve haver apenas logica, os dados devem ser guadados em outro arquivo chamado service

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list-component.html' //aqui ele esta buscando o template no arquivo .html
})

//exporta a classe CoursesListComponent
export class CourseListComponent implements OnInit { // OnInit: realiza uma operacao no momento que o componente for inicializado

    //importando a classe Course sendo array, por isso eh representada como "Course[]"
    courses: Course[] = [];//Foi criada a propriedade course sendo um array a partir da classe "Course"

    constructor(private courseSevice :CourseService){

    }

    //Aqui esta chamando a funcao do OnInit
    ngOnInit(): void {
        this.courses = this.courseSevice.retrieveAll();
    };

};