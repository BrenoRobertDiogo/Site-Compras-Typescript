import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{
    transform(texto: string): string{
        if (texto.length > 30) {
            return texto.substr(0, 30)+'...'
        } else{
            return texto
        }
    }
}