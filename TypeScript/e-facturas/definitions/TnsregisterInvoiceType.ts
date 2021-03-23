import { InternationalCustomerTaxId } from "./InternationalCustomerTaxId";
import { Line } from "./Line";
import { DocumentTotals } from "./DocumentTotals";

/**
 * tns:RegisterInvoiceType
 * targetNSAlias `tns`
 * targetNamespace `http://servicos.portaldasfinancas.gov.pt/faturas/`
 */
export interface TnsregisterInvoiceType {
    /** SAFPTPortugueseVatNumber|xsd:integer|minInclusive,maxInclusive */
    taxRegistrationNumber?: string;
    /** xsd:string|pattern,minLength,maxLength */
    invoiceNo?: string;
    /** SAFdateType|xsd:date */
    invoiceDate?: string;
    /** xsd:string|FT,NC,ND,FS,FR,DC */
    invoiceType?: string;
    /** xsd:string|N,A */
    invoiceStatus?: string;
    /** xsd:string|pattern,length */
    eacCode?: string;
    /** SAFPTPortugueseVatNumber|xsd:integer|minInclusive,maxInclusive */
    customerTaxId?: string;
    /** InternationalCustomerTaxID */
    internationalCustomerTaxId?: InternationalCustomerTaxId;
    /** Line[] */
    line?: Array<Line>;
    /** DocumentTotals */
    documentTotals?: DocumentTotals;
}
