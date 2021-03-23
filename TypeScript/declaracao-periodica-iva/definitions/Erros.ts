import { Alerta } from "./Alerta";

/**
 * erros
 * targetNSAlias `tns`
 * targetNamespace `https://servicos.portaldasfinancas.gov.pt/dpivaws/DeclaracaoPeriodicaIVAWebService`
 */
export interface Erros {
    /** xsd:boolean */
    temMaisErros?: string;
    /** erro[] */
    erro?: Array<Alerta>;
}
