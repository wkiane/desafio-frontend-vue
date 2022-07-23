export class ProdutoCarrinho {
    public id:string|undefined = undefined;
    public descricao:string = "";
    public qtd:number = 0;
    public preco:number = 0;
    public precoTotal:number = 0;
    public imagem:string = "";

    constructor(p?:Partial<ProdutoCarrinho>) {
        Object.assign(this, p);
    }
}