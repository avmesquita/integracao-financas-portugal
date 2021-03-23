
/** pagamentoIVARequest */
export interface PagamentoIvaRequest {
    /** xsd:long */
    idDeclaracao?: string;
    /** xsd:long */
    montantePagoAnterior?: string;
    /** xsd:long */
    montantePagar?: string;
    /** xsd:string */
    metodoPagamento?: string;
}
