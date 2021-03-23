import { RegistarDadosContratoRequest } from "..\definitions\RegistarDadosContratoRequest";
import { RegistarDadosContratoResponse } from "..\definitions\RegistarDadosContratoResponse";
import { ObterReciboRequest } from "..\definitions\ObterReciboRequest";
import { ObterReciboResponse } from "..\definitions\ObterReciboResponse";
import { EmitirReciboRequest } from "..\definitions\EmitirReciboRequest";
import { EmitirReciboResponse } from "..\definitions\EmitirReciboResponse";

export interface ArrendamentoSoap11 {
    registarDadosContratoRequest(registarDadosContratoRequest: RegistarDadosContratoRequest, callback: (err: any, result: RegistarDadosContratoRequest, rawResponse: any, soapHeader: any, rawRequest: any) => void): RegistarDadosContratoResponse;
    obterReciboRequest(obterReciboRequest: ObterReciboRequest, callback: (err: any, result: ObterReciboRequest, rawResponse: any, soapHeader: any, rawRequest: any) => void): ObterReciboResponse;
    emitirReciboRequest(emitirReciboRequest: EmitirReciboRequest, callback: (err: any, result: EmitirReciboRequest, rawResponse: any, soapHeader: any, rawRequest: any) => void): EmitirReciboResponse;
}
