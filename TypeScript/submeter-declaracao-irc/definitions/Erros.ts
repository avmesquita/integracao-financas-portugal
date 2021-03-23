import { Alerta } from "./Alerta";

/**
 * erros
 * targetNSAlias `tns`
 * targetNamespace `https://servicos.portaldasfinancas.gov.pt/dm22ircws/SubmeterDeclaracaoIRCService/2020`
 */
export interface Erros {
    /** xsd:boolean */
    temMaisErros?: string;
    /** erro[] */
    erro?: Array<Alerta>;
}
