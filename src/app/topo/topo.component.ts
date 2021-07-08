import { Component, OnInit } from "@angular/core";
import { OfertasService } from "app/ofertas.service";
import { Oferta } from "app/shared/oferta.model";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-topo",
  templateUrl: "./topo.component.html",
  styleUrls: ["./topo.component.css"],
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>;
  public ofertasArray: Array<Oferta>;

  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertaService: OfertasService) {}

  ngOnInit() {
    this.ofertas = this.subjectPesquisa // retorno
      .debounceTime(450)
      .distinctUntilChanged() // fazer pesquisas distintas (não pegar o mesmo valor)
      .switchMap((termoDaBusca: string) => {
        if (termoDaBusca.trim() === "") {
          // Observable de array de ofertas vazio
          return Observable.of<Oferta[]>([]);
        }
        return this.ofertaService.pesquisaPorOfertas(termoDaBusca);
      })
      .catch((error: any) => {
        console.log(error);
        return Observable.of<Oferta[]>([]);
      });
    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas);
      this.ofertasArray = ofertas;
    });
  }

  /**
   * pesquisa
   */
  public pesquisa(termoDaBusca: string): void {
    /* this.ofertas = this.ofertaService.pesquisaPorOfertas(termoDaBusca)
    // console.log(this.ofertas);

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas)),
      (erro: any) => console.log('Erro status'+ erro.status),
      () => console.log('Fluxo de eventos completo!'); */

    this.subjectPesquisa.next(termoDaBusca);
  }
}
