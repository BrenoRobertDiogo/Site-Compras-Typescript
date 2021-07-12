import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import CarrinhoService from 'carrinho.service';
// import { table } from 'console';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService , CarrinhoService ]
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra: number

  public formulario: FormGroup = new FormGroup(
    {
      'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]), // parametros: valor inicial, array validador, array validador assincrono
      'numero': new FormControl(null, [Validators.required, Validators.minLength(1)]),
      'complemento': new FormControl(null, []),
      'formaPagamento': new FormControl('', [Validators.required])

    });

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit() {
     console.log( this.carrinhoService.exibitItens())
  }

  public confirmarCompra(): void {
    // console.log(this.formulario);
    let form: any = this.formulario.value
    if (this.formulario.status != 'INVALID') {
      let pedido: Pedido = new Pedido(
        form.endereco,
        form.numero,
        form.complemento,
        form.formaPagamento

      )
      // console.log(pedido);
      this.ordemCompraService.efetivarCompra(pedido)
        .subscribe((idPedido: number) => {
          this.idPedidoCompra = idPedido
        })


    } else {

    }
    // console.log(this.idPedidoCompra);

  }
}
