import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { OfertasService } from "app/ofertas.service";
import { Oferta } from "app/shared/oferta.model";
import { Observable } from "rxjs/Observable";
import "rxjs";
import { Observer, Subscription } from "rxjs";
import {CarrinhoService} from "carrinho.service";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.css"],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit, OnDestroy {
  public oferta: Oferta;
  private tempoObservableSubscription: Subscription;
  private tempoObservableTesteSubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    // let id: any = this.route.snapshot.params["id"];
    console.log(this.carrinhoService.exibirItens());
     

    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertasPorId(parametros.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });
    });



  }
  ngOnDestroy(): void {
    /* this.tempoObservableSubscription.unsubscribe();
    this.tempoObservableTesteSubscription.unsubscribe(); */
  }

  /**
   * adicionarItemCarrinho
   */
  public adicionarItemCarrinho() {
    this.carrinhoService.incluirItem(this.oferta)
    console.log(this.carrinhoService.exibirItens());
     
  }

}
