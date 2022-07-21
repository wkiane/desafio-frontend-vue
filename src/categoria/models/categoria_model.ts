export class Categoria {
    public text:string = "";
    public href:string = "";

    constructor(p?:Partial<Categoria>) {
        Object.assign(this, p);
    }
} 