import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas.service';
import { Oferta } from 'app/shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public ofertas: Oferta[];

  ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas();
    this.ofertasService.getOfertasAsync()
      .then(
        (ofertas: Oferta[]) => {
          console.log("A função resolve foi resolvida :)");
          
          this.ofertas = ofertas
        })
      .catch(
        (error: any) => {
          console.log(error);

        })

  }

}
