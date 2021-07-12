import { ItemCarrinho } from "app/shared/item-carrinho.model";
import { Oferta } from "app/shared/oferta.model";

class CarrinhoService {
    public itens: ItemCarrinho[] = []

    public exibitItens(): ItemCarrinho[] {
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
        
    }

}

export default CarrinhoService;