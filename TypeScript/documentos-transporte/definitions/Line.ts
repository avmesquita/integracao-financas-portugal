import { OrderReferences } from "./OrderReferences";

/**
 * Line
 * targetNSAlias `tns`
 * targetNamespace `https://servicos.portaldasfinancas.gov.pt/sgdtws/documentosTransporte/`
 */
export interface Line {
    /** OrderReferences[] */
    orderReferences?: Array<OrderReferences>;
    /** SAFPTtextTypeMandatoryMax200Car|xsd:string|minLength,maxLength */
    productDescription?: string;
    /** SAFdecimalType|xsd:decimal */
    quantity?: string;
    /** SAFPTtextTypeMandatoryMax20Car|xsd:string|minLength,maxLength */
    unitOfMeasure?: string;
    /** SAFmonetaryType|xsd:decimal */
    unitPrice?: string;
}
