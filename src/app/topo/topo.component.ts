import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas.service';
import { Oferta } from 'app/shared/oferta.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
  }

  /**
   * pesquisa
   */
  public pesquisa(termoDaBusca: string): void {
    this.ofertas = this.ofertaService.pesquisaPorOfertas(termoDaBusca)
    // console.log(this.ofertas);

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas)),
      (erro: any) => console.log('Erro status'+ erro.status),
      () => console.log('Fluxo de eventos completo!');
      
      
    
    
  }

}
