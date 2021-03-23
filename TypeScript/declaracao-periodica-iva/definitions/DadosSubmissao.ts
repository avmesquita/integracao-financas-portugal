import { Contribuinte } from "./Contribuinte";

/**
 * dadosSubmissao
 * targetNSAlias `tns`
 * targetNamespace `https://servicos.portaldasfinancas.gov.pt/dpivaws/DeclaracaoPeriodicaIVAWebService`
 */
export interface DadosSubmissao {
    /** xsd:dateTime */
    data?: string;
    /** xsd:short */
    ano?: string;
    /** xsd:string */
    periodo?: string;
    /** xsd:long */
    idDeclaracao?: string;
    /** contribuinte[] */
    contribuinte?: Array<Contribuinte>;
}
