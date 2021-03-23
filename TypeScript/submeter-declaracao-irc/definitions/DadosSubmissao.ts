import { Contribuinte } from "./Contribuinte";
import { DadosPagamento } from "./DadosPagamento";

/**
 * dadosSubmissao
 * targetNSAlias `tns`
 * targetNamespace `https://servicos.portaldasfinancas.gov.pt/dm22ircws/SubmeterDeclaracaoIRCService/2020`
 */
export interface DadosSubmissao {
    /** xsd:dateTime */
    data?: string;
    /** xsd:short */
    ano?: string;
    /** xsd:long */
    idDeclaracao?: string;
    /** contribuinte[] */
    contribuinte?: Array<Contribuinte>;
    /** dadosPagamento */
    dadosPagamento?: DadosPagamento;
}
