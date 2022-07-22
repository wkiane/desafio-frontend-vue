import { Login } from "../models/login_model";

export type IParametrosLogin = {
    email: string
    senha: string
}

export function fazer_login(parametros: IParametrosLogin) : Login | null {
   if(parametros.email != "teste@teste.com" || parametros.senha != "12345") {
    return null;
   }

   return parametros as Login;
}
