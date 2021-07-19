import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { CarrinhoService } from 'carrinho.service';
import { ItemCarrinho } from 'app/shared/item-carrinho.model';
// import { table } from 'console';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  public itensCarrinho: ItemCarrinho[] = []
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
    this.itensCarrinho = this.carrinhoService.exibirItens()
    console.log(this.itensCarrinho);

  }

  public confirmarCompra(): void {
    // console.log(this.formulario);
    let form: any = this.formulario.value
    if (this.formulario.status != 'INVALID') {
      if (this.carrinhoService.exibirItens().length === 0) {
        alert('Selecione um item nessa caramba')
      } else {
        let pedido: Pedido = new Pedido(
          form.endereco,
          form.numero,
          form.complemento,
          form.formaPagamento,
          this.carrinhoService.exibirItens()

        )
        // console.log(pedido);
        this.ordemCompraService.efetivarCompra(pedido)
          .subscribe((idPedido: number) => {
            this.idPedidoCompra = idPedido
          })
      }

    }
    // console.log(this.idPedidoCompra);

  }

  public adicionar(item: ItemCarrinho) {
    this.carrinhoService.adicionarQuantidade(item)
  }

  public diminuir(item: ItemCarrinho) {
    this.carrinhoService.diminuirQuantidade(item)
  }

}
