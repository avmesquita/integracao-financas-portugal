import { TnsregisterInvoiceType } from "..\definitions\TnsregisterInvoiceType";
import { TnsregisterInvoiceResponseType } from "..\definitions\TnsregisterInvoiceResponseType";

export interface FaturasSoap {
    registerInvoiceElem(registerInvoiceElem: TnsregisterInvoiceType, callback: (err: any, result: TnsregisterInvoiceType, rawResponse: any, soapHeader: any, rawRequest: any) => void): TnsregisterInvoiceResponseType;
}
