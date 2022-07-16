import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list-component.html' //aqui ele esta buscando o template no arquivo .html
})

//exporta a classe CoursesListComponent
export class CourseListComponent implements OnInit { // OnInit: realiza uma operacao no momento que o componente for inicializado

    //importando a classe Course sendo array, por isso eh representada como "Course[]"
    courses: Course[] = [];//Foi criada a propriedade course sendo um array a partir da classe "Course"

    //Aqui esta chamando a funcao do OnInit
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'November, 2, 2022'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 45.99,
                code: 'LKL-8796',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 4, 2022'
            }
        ];
    };

};