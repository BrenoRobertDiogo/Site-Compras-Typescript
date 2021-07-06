import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService]
})
export class ComoUsarComponent implements OnInit {
  public comoUsar: string = '';

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
    
    let paramPai: number = this.route.parent.snapshot.params['id'];
    this.ofertasService.getComoUsarOfertaPorId(paramPai)
    .then((resposta: any) => {
      this.comoUsar = resposta;
    })
  }

}
