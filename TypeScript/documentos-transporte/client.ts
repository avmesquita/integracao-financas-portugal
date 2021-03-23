import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { TnsstockMovement } from "./definitions/TnsstockMovement";
import { TnsstockMovementResponse } from "./definitions/TnsstockMovementResponse";
import { DocumentosTransporte } from "./services/DocumentosTransporte";

export interface DocumentosTransporteClient extends SoapClient {
    DocumentosTransporte: DocumentosTransporte;
    envioDocumentoTransporteAsync(envioDocumentoTransporteRequestElem: TnsstockMovement): Promise<TnsstockMovementResponse>;
}

/** Create DocumentosTransporteClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<DocumentosTransporteClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
