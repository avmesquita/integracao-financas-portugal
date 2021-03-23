import { OrderReferences } from "./OrderReferences";
import { Tax } from "./Tax";

/**
 * Line
 * targetNSAlias `tns`
 * targetNamespace `http://servicos.portaldasfinancas.gov.pt/faturas/`
 */
export interface Line {
    /** OrderReferences */
    orderReferences?: OrderReferences;
    /** SAFmonetaryType|xsd:decimal */
    debitAmount?: string;
    /** SAFmonetaryType|xsd:decimal */
    creditAmount?: string;
    /** Tax */
    tax?: Tax;
    /** xsd:string|length */
    taxExemptionReason?: string;
}
