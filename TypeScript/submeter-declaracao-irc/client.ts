import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { SubmeterDeclaracaoIrcRequest } from "./definitions/SubmeterDeclaracaoIrcRequest";
import { SubmeterDeclaracaoIrcResponse } from "./definitions/SubmeterDeclaracaoIrcResponse";
import { ValidarDeclaracaoIrcRequest } from "./definitions/ValidarDeclaracaoIrcRequest";
import { ValidarDeclaracaoIrcResponse } from "./definitions/ValidarDeclaracaoIrcResponse";
import { SubmeterDeclaracaoIrcService } from "./services/SubmeterDeclaracaoIrcService";

export interface WsSubmeterDeclaracaoIrcClient extends SoapClient {
    SubmeterDeclaracaoIrcService: SubmeterDeclaracaoIrcService;
    submeterDeclaracaoAsync(submeterDeclaracaoIrcRequest: SubmeterDeclaracaoIrcRequest): Promise<SubmeterDeclaracaoIrcResponse>;
    validarDeclaracaoAsync(validarDeclaracaoIrcRequest: ValidarDeclaracaoIrcRequest): Promise<ValidarDeclaracaoIrcResponse>;
}

/** Create WsSubmeterDeclaracaoIrcClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<WsSubmeterDeclaracaoIrcClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
