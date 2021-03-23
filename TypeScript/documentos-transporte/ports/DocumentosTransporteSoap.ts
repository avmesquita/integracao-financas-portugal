import { TnsstockMovement } from "..\definitions\TnsstockMovement";
import { TnsstockMovementResponse } from "..\definitions\TnsstockMovementResponse";

export interface DocumentosTransporteSoap {
    envioDocumentoTransporteRequestElem(envioDocumentoTransporteRequestElem: TnsstockMovement, callback: (err: any, result: TnsstockMovement, rawResponse: any, soapHeader: any, rawRequest: any) => void): TnsstockMovementResponse;
}
