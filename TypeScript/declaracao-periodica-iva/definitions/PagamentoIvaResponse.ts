import { DadosPagamento } from "./DadosPagamento";

/** pagamentoIVAResponse */
export interface PagamentoIvaResponse {
    /** xsd:int */
    codigo?: string;
    /** xsd:string|maxLength */
    mensagem?: string;
    /** dadosPagamento */
    dadosPagamento?: DadosPagamento;
    /** xsd:base64Binary */
    documento?: string;
}
