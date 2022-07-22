import cliente_http from "@/utils/cliente_http";
import { AxiosResponse } from "axios";
import { Produto } from "../models/produto_model";

export type IParametrosProdutos = {
    categoria?: string
    q?: string
}

export async function get_produtos(parametros: IParametrosProdutos) : Promise<AxiosResponse<Produto[]>> {
    const response = await cliente_http.get('/produtos', {
        params: parametros
    });
    return response.data;
}

export async function get_produto(id: string) : Promise<AxiosResponse<Produto>> {
    const response = await cliente_http.get(`/produtos/${id}`);
    return response.data;
}