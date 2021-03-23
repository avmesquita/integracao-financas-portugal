import { DadosSubmissao } from "./DadosSubmissao";
import { Alertas } from "./Alertas";
import { Erros } from "./Erros";

/** submeterDeclaracaoIRCResponse */
export interface SubmeterDeclaracaoIrcResponse {
    /** xsd:int */
    codigo?: string;
    /** xsd:string */
    mensagem?: string;
    /** dadosSubmissao */
    dadosSubmissao?: DadosSubmissao;
    /** alertas */
    alertas?: Alertas;
    /** erros */
    erros?: Erros;
}
