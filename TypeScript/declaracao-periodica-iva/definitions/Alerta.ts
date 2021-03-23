
/**
 * alerta
 * targetNSAlias `tns`
 * targetNamespace `https://servicos.portaldasfinancas.gov.pt/dpivaws/DeclaracaoPeriodicaIVAWebService`
 */
export interface Alerta {
    /** xsd:string */
    anexo?: string;
    /** xsd:string */
    quadro?: string;
    /** xsd:string */
    tabela?: string;
    /** xsd:string */
    linha?: string;
    /** xsd:string */
    campo?: string;
    /** xsd:string|maxLength */
    codigo?: string;
    /** xsd:string */
    mensagem?: string;
}
