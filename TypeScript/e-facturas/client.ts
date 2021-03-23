import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { TnsregisterInvoiceType } from "./definitions/TnsregisterInvoiceType";
import { TnsregisterInvoiceResponseType } from "./definitions/TnsregisterInvoiceResponseType";
import { Faturas } from "./services/Faturas";

export interface FactemiwsClient extends SoapClient {
    Faturas: Faturas;
    RegisterInvoiceAsync(registerInvoiceElem: TnsregisterInvoiceType): Promise<TnsregisterInvoiceResponseType>;
}

/** Create FactemiwsClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<FactemiwsClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
