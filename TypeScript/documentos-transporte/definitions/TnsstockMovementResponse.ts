import { ResponseStatus } from "./ResponseStatus";

/** tns:StockMovementResponse */
export interface TnsstockMovementResponse {
    /** ResponseStatus[] */
    responseStatus?: Array<ResponseStatus>;
    /** SAFPTtextTypeMandatoryMax60Car|xsd:string|minLength,maxLength */
    documentNumber?: string;
    /** SAFPTtextTypeMandatoryMax200Car|xsd:string|minLength,maxLength */
    atDocCodeId?: string;
}
