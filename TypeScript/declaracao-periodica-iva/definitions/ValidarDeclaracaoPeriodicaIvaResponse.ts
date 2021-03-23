import { Alertas } from "./Alertas";
import { Erros } from "./Erros";

/** validarDeclaracaoPeriodicaIVAResponse */
export interface ValidarDeclaracaoPeriodicaIvaResponse {
    /** xsd:int */
    codigo?: string;
    /** xsd:string|maxLength */
    mensagem?: string;
    /** alertas */
    alertas?: Alertas;
    /** erros */
    erros?: Erros;
}
