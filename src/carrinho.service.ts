import { ItemCarrinho } from "app/shared/item-carrinho.model";
import { Oferta } from "app/shared/oferta.model";

class CarrinhoService {
    diminuirQuantidade(item: ItemCarrinho) {
        let itemCarrinhoEncontrado = this.itens.find((itemCarrinho: ItemCarrinho) => itemCarrinho.id === item.id)
        // item.quantidade += 1
        if (itemCarrinhoEncontrado) {
            if (itemCarrinhoEncontrado.quantidade > 0) {
                itemCarrinhoEncontrado.quantidade -= 1
                
            } else {
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1) // indice do item a ser tirado | quantidade
                
            }
            
        } else {
            console.log('Item não encontrado');
            
        }
    }
    adicionarQuantidade(item: ItemCarrinho): void {
        let itemCarrinhoEncontrado = this.itens.find((itemCarrinho: ItemCarrinho) => itemCarrinho.id === item.id)
        // item.quantidade += 1
        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
            console.log(itemCarrinhoEncontrado.quantidade);
            
        } else {
            console.log('Item não encontrado');
            
        }
    }
    public itens: ItemCarrinho[] = []

    public exibirItens(): ItemCarrinho[] {
        return this.itens
    }

    /**
     * incluirItem
     */
    public incluirItem(oferta: Oferta): void {
        console.log(oferta);
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1

        );
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
        } else {
            this.itens.push(itemCarrinho)

        }


    }

    /**
     * totalCarrinhoCompras
     */
    public totalCarrinhoCompras(): number {
        let total: number = 0
        this.itens.map((item: ItemCarrinho) => {
            total += item.valor * item.quantidade
        })
        return total
    }

}

export { CarrinhoService };