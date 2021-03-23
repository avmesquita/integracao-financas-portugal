import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { RegistarDadosContratoRequest } from "./definitions/RegistarDadosContratoRequest";
import { RegistarDadosContratoResponse } from "./definitions/RegistarDadosContratoResponse";
import { ObterReciboRequest } from "./definitions/ObterReciboRequest";
import { ObterReciboResponse } from "./definitions/ObterReciboResponse";
import { EmitirReciboRequest } from "./definitions/EmitirReciboRequest";
import { EmitirReciboResponse } from "./definitions/EmitirReciboResponse";
import { ArrendamentoService } from "./services/ArrendamentoService";

export interface ArrendamentoClient extends SoapClient {
    ArrendamentoService: ArrendamentoService;
    registarDadosContratoAsync(registarDadosContratoRequest: RegistarDadosContratoRequest): Promise<RegistarDadosContratoResponse>;
    obterReciboAsync(obterReciboRequest: ObterReciboRequest): Promise<ObterReciboResponse>;
    emitirReciboAsync(emitirReciboRequest: EmitirReciboRequest): Promise<EmitirReciboResponse>;
}

/** Create ArrendamentoClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ArrendamentoClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
