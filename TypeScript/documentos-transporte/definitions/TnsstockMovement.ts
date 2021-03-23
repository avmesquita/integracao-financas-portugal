import { CompanyAddress } from "./CompanyAddress";
import { CompanyAddress } from "./CompanyAddress";
import { CompanyAddress } from "./CompanyAddress";
import { CompanyAddress } from "./CompanyAddress";
import { Line } from "./Line";

/** tns:StockMovement */
export interface TnsstockMovement {
    /** SAFPTPortugueseVatNumber|xsd:integer|minInclusive,maxInclusive */
    taxRegistrationNumber?: string;
    /** SAFPTtextTypeMandatoryMax100Car|xsd:string|minLength,maxLength */
    companyName?: string;
    /** CompanyAddress */
    companyAddress?: CompanyAddress;
    /** SAFPTtextTypeMandatoryMax60Car|xsd:string|minLength,maxLength */
    documentNumber?: string;
    /** SAFPTtextTypeMandatoryMax200Car|xsd:string|minLength,maxLength */
    atDocCodeId?: string;
    /** MovementStatus|xsd:string|N,T,A */
    movementStatus?: string;
    /** SAFdateType|xsd:date */
    movementDate?: string;
    /** MovementType|xsd:string|GR,GT,GA,GC,GD */
    movementType?: string;
    /** SAFPTtextTypeMandatoryMax20Car|xsd:string|minLength,maxLength */
    customerTaxId?: string;
    /** SAFPTtextTypeMandatoryMax20Car|xsd:string|minLength,maxLength */
    supplierTaxId?: string;
    /** CustomerAddress */
    customerAddress?: CompanyAddress;
    /** SAFPTtextTypeMandatoryMax100Car|xsd:string|minLength,maxLength */
    customerName?: string;
    /** AddressTo */
    addressTo?: CompanyAddress;
    /** AddressFrom */
    addressFrom?: CompanyAddress;
    /** SAFdateTimeType|xsd:dateTime */
    movementEndTime?: string;
    /** SAFdateTimeType|xsd:dateTime */
    movementStartTime?: string;
    /** SAFPTtextTypeMandatoryMax32Car|xsd:string|minLength,maxLength */
    vehicleId?: string;
    /** Line[] */
    line?: Array<Line>;
}
