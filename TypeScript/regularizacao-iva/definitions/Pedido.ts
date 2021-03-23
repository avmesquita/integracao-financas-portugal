
/**
 * Pedido
 * targetNSAlias `tns`
 * targetNamespace `http://servicos.portaldasfinancas.gov.pt/PedidoCobrancaDuvidosa/`
 */
export interface Pedido {
    /** NumeroFiscalType|xs:integer */
    numeroFiscalCredor?: string;
    /** xs:integer */
    numeroPedido?: string;
    /** DateType|xs:date */
    dataSubmissao?: string;
    /** NumeroFiscalType|xs:integer */
    numeroFiscalRoc?: string;
    /** NumeroFiscalType|xs:integer */
    numeroFiscalDevedor?: string;
    /** xs:string */
    estadoPedido?: string;
    /** DateType|xs:date */
    dataEstado?: string;
}
