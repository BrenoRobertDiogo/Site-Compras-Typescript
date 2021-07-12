import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {
  @ViewChild('formulario')
  public formulario: NgForm;

  public idPedidoCompra: number

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  /**
   * confirmarCompra
   */
  public confirmarCompra(): void {
    console.log(this.formulario.value);
    let form = this.formulario.value
    let pedido: Pedido = new Pedido(form.endereco, form.numero, form.complemento, form.formaPagamento)

    this.ordemCompraService.efetivarCompra(pedido)
    .subscribe((idPedido: number) => {
      console.log('Pedido cadastrado com sucesso, idPedido: '+idPedido);
      this.idPedidoCompra = idPedido
      
    })
    
  }



}
