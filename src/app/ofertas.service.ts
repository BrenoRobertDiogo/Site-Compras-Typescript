import { Oferta } from "./shared/oferta.model";

import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import 'rxjs/add/operator/toPromise';

import { API } from "./app.api";

@Injectable() 
export class OfertasService {
    
    private api: string = API;
    constructor(private http: Http) { }

    /**
     * getOfertas
     */
    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(this.api+'?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(this.api+`?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }

    getOfertasPorId(id: number): Promise<Oferta> {
        return this.http.get(this.api+`?id=${id}`)
        .toPromise()
        .then((resposta: any) => {return resposta.json().shift()})
      }

}