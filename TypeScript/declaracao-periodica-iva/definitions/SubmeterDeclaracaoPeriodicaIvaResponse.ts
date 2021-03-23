import { DadosSubmissao } from "./DadosSubmissao";
import { Alertas } from "./Alertas";
import { Erros } from "./Erros";

/** submeterDeclaracaoPeriodicaIVAResponse */
export interface SubmeterDeclaracaoPeriodicaIvaResponse {
    /** xsd:int */
    codigo?: string;
    /** xsd:string|maxLength */
    mensagem?: string;
    /** dadosSubmissao */
    dadosSubmissao?: DadosSubmissao;
    /** alertas */
    alertas?: Alertas;
    /** erros */
    erros?: Erros;
}
