import { Erros2 } from "./Erros2";

/** emitirReciboResponse */
export interface EmitirReciboResponse {
    /** xs:short */
    codigo?: string;
    /** xs:string */
    mensagem?: string;
    /** xs:long */
    numeroRecibo?: string;
    /** erros */
    erros?: Erros2;
}
