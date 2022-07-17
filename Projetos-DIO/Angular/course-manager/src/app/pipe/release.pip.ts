import { Pipe, PipeTransform } from "@angular/core";


@Pipe({ // serve para criar os pipes
    name: 'replace'
})

export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToreplace: string) {
        return value.replace(char, valueToreplace) // Para substituir a string utilizando um pipe costumizado. 
    }

}   