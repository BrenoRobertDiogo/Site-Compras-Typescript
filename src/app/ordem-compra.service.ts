import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from './app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestOptions, Response } from '@angular/http';

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) { }


    public efetivarCompra(pedido: Pedido): Observable<number> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'my-auth-token' }) };

        return this.http.post<any>(API+'pedidos', pedido, httpOptions)
        .pipe(
            map((resposta: any) => resposta.id)  
            )
        
        
    }
}