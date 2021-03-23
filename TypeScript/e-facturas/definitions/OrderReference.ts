
/**
 * OrderReference
 * targetNSAlias `tns`
 * targetNamespace `http://servicos.portaldasfinancas.gov.pt/faturas/`
 */
export interface OrderReference {
    /** SAFPTtextTypeMandatoryMax60Car|xsd:string|minLength,maxLength */
    originatingOn?: string;
    /** SAFdateType|xsd:date */
    orderDate?: string;
}
