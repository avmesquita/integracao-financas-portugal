
/**
 * Periodo
 * targetNSAlias `tns`
 * targetNamespace `http://servicos.portaldasfinancas.gov.pt/PedidoCobrancaDuvidosa/`
 */
export interface Periodo {
    /** xs:integer */
    ano?: string;
    /** xs:integer */
    mes?: string;
    /** TipoEnquadramentoType|xs:string|M,T */
    tipoEnquadramento?: string;
}
