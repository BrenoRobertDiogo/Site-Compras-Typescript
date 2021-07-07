import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OfertasService } from "app/ofertas.service";
import { Oferta } from "app/shared/oferta.model";
import { Observable } from "rxjs/Observable";
import "rxjs";
import { Observer, Subscription } from "rxjs";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.css"],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit, OnDestroy {
  public oferta: Oferta;
  private tempoObservableSubscription: Subscription 
  private tempoObservableTesteSubscription: Subscription 
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}
  

  ngOnInit() {
    let id: any = this.route.snapshot.params["id"];
    this.ofertasService.getOfertasPorId(id).then((oferta: Oferta) => {
      this.oferta = oferta;
    });
    this.route.params.subscribe(
      (parametro: any) => {
        console.log(parametro);
      },
      (erro: any) => {
        console.log(erro);
      },
      () => {
        console.log("Acabou o processamento");
      }
    );

    let tempo = Observable.interval(2000); // A cada 2s vai ter um observável

    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      console.log(intervalo);
    });
    // observable(observavel)
    let meuObservableTeste = Observable.create((observer: Observer<number>) => {
      observer.next(1);
      observer.next(3);
      observer.error("Algum erro foi encontrado na stream de eventos");
      observer.next(3);
    });

    // observable(observador)
    this.tempoObservableTesteSubscription =  meuObservableTeste.subscribe(
      (resultado: any) => console.log(resultado), // NEXT
      (error: string) => console.log(error), // ERRO
      () => console.log("Stream de eventos finalizada") // Complete
    );
  } 
  ngOnDestroy(): void {
    this.tempoObservableSubscription.unsubscribe();
    this.tempoObservableTesteSubscription.unsubscribe();
  }
}
