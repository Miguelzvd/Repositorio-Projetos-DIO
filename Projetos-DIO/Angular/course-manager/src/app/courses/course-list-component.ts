import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

//No componente principal deve haver apenas logica, os dados devem ser guadados em outro arquivo chamado service

@Component({
    templateUrl: './course-list-component.html' //aqui ele esta buscando o template no arquivo .html
})

//exporta a classe CoursesListComponent
export class CourseListComponent implements OnInit { // OnInit: realiza uma operacao no momento que o componente for inicializado

    _filteredCourses: Course[] = [];

    //importando a classe Course sendo array, por isso eh representada como "Course[]"
    _courses: Course[] = [];//Foi criada a propriedade course sendo um array a partir da classe "Course"
    
    _filterBy!: string;

    constructor(private courseSevice: CourseService){ }//Captura a injecao de classes

    //Aqui esta chamando a funcao do OnInit
    ngOnInit(): void {
        this.retrieveAll();
    };

    retrieveAll(): void {
        this.courseSevice.retrieveAll().subscribe({
            next: courses => {// esse courses eh o retorno do observable.
                this._courses = courses;
                this._filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        })
    }

    set filter(value: string) {
        this._filterBy = value;

        this._filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
};