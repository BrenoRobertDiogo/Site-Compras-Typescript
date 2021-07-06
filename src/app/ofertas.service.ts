import { Oferta } from "./shared/oferta.model";

import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import "rxjs/add/operator/toPromise";

import { API } from "./app.api";

@Injectable()
export class OfertasService {
  private api: string = API;
  constructor(private http: Http) {}

  /**
   * getOfertas
   */
  public getOfertas(): Promise<Oferta[]> {
    return this.http
      .get(this.api + "ofertas?destaque=true")
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get(this.api + `ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  getOfertasPorId(id: number): Promise<Oferta> {
    return this.http
      .get(this.api + `ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.json().shift();
      });
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(API+'como-usar?id='+id)
    .toPromise()
    .then((resposta)=>{
      let retornar: any = resposta.json()[0].descricao;
        console.log(retornar);
        
        return retornar
    })
  }
  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(API+'onde-fica?id='+id)
    .toPromise()
    .then((resposta)=>{
      let retornar: any = resposta.json()[0].descricao;
        console.log(retornar);
        
        return retornar
    })
  }
}
