import { Erros1 } from "./Erros1";

/** obterReciboResponse */
export interface ObterReciboResponse {
    /** xs:short */
    codigo?: string;
    /** xs:string */
    mensagem?: string;
    /** xs:base64Binary */
    recibo?: string;
    /** erros */
    erros?: Erros1;
}
