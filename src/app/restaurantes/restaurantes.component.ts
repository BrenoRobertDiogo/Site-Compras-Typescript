import { Component, OnInit } from '@angular/core';
import { Oferta } from 'app/shared/oferta.model';
import { OfertasService } from 'app/ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public ofertas: Oferta[]

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
      
    })
  }

}
