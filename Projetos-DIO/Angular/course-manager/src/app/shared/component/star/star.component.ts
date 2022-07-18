import { style } from "@angular/animations";
import { Component, Input, OnChanges } from "@angular/core";

@Component ({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges { //Eh usado Onchange para atributos que recebem valores em constante mudancas, ou algo que acontece de forma assicrona.

    @Input() //transforma todo este bloco como um receptor de valor. Vira uma tag do component.
    rating: number = 0

    starWidth!: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }
}