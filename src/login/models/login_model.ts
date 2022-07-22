export class Login {
    public email:string = "";
    public senha:string = "";

    constructor(p?:Partial<Login>) {
        Object.assign(this, p);
    }
}