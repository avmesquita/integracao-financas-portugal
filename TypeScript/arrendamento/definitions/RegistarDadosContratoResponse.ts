import { Erros } from "./Erros";

/** registarDadosContratoResponse */
export interface RegistarDadosContratoResponse {
    /** xs:short */
    codigo?: string;
    /** xs:string */
    mensagem?: string;
    /** xs:long */
    numeroContrato?: string;
    /** erros */
    erros?: Erros;
}
