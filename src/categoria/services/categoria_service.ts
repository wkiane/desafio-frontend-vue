import cliente_http from "@/utils/cliente_http";
import { AxiosResponse } from "axios";
import { Categoria } from "../models/categoria_model";

export async function get_categorias() : Promise<AxiosResponse<Categoria[]>> {
    const response = await cliente_http.get('/categorias');
    return response.data;
}