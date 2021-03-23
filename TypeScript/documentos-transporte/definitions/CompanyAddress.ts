
/**
 * CompanyAddress
 * targetNSAlias `tns`
 * targetNamespace `https://servicos.portaldasfinancas.gov.pt/sgdtws/documentosTransporte/`
 */
export interface CompanyAddress {
    /** SAFPTtextTypeMandatoryMax100Car|xsd:string|minLength,maxLength */
    addressdetail?: string;
    /** SAFPTtextTypeMandatoryMax50Car|xsd:string|minLength,maxLength */
    city?: string;
    /** PostalCodePT|xsd:string|pattern */
    postalCode?: string;
    /** xsd:string */
    country?: string;
}
