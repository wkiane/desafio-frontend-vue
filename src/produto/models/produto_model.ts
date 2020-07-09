export class Produto {
    public id:string|undefined = undefined;
    public descricao:string = "";
    public descricaoDetalhada:string = "";
    public categoria:string = "";
    public qtdEstoque:number = 0;
    public preco:number = 0;
    public imagem:string = "";

    constructor(p?:Partial<Produto>) {
        Object.assign(this, p);
    }
} 