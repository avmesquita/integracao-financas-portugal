
/**
 * Tax
 * targetNSAlias `tns`
 * targetNamespace `http://servicos.portaldasfinancas.gov.pt/faturas/`
 */
export interface Tax {
    /** xsd:string|pattern,minLength,maxLength */
    taxType?: string;
    /** xsd:string|pattern,minLength,maxLength */
    taxCountryRegion?: string;
    /** SAFdecimalType|xsd:decimal */
    taxPercentage?: string;
}
