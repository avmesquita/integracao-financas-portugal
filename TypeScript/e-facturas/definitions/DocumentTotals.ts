
/**
 * DocumentTotals
 * targetNSAlias `tns`
 * targetNamespace `http://servicos.portaldasfinancas.gov.pt/faturas/`
 */
export interface DocumentTotals {
    /** SAFmonetaryType|xsd:decimal */
    taxPayable?: string;
    /** SAFmonetaryType|xsd:decimal */
    netTotal?: string;
    /** SAFmonetaryType|xsd:decimal */
    grossTotal?: string;
}
