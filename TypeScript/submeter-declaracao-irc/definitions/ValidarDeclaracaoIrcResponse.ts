import { Alertas } from "./Alertas";
import { Erros } from "./Erros";

/** validarDeclaracaoIRCResponse */
export interface ValidarDeclaracaoIrcResponse {
    /** xsd:int */
    codigo?: string;
    /** xsd:string */
    mensagem?: string;
    /** alertas */
    alertas?: Alertas;
    /** erros */
    erros?: Erros;
}
