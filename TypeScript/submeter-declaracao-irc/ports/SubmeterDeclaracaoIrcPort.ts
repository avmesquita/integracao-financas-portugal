import { SubmeterDeclaracaoIrcRequest } from "..\definitions\SubmeterDeclaracaoIrcRequest";
import { SubmeterDeclaracaoIrcResponse } from "..\definitions\SubmeterDeclaracaoIrcResponse";
import { ValidarDeclaracaoIrcRequest } from "..\definitions\ValidarDeclaracaoIrcRequest";
import { ValidarDeclaracaoIrcResponse } from "..\definitions\ValidarDeclaracaoIrcResponse";

export interface SubmeterDeclaracaoIrcPort {
    submeterDeclaracaoIrcRequest(submeterDeclaracaoIrcRequest: SubmeterDeclaracaoIrcRequest, callback: (err: any, result: SubmeterDeclaracaoIrcRequest, rawResponse: any, soapHeader: any, rawRequest: any) => void): SubmeterDeclaracaoIrcResponse;
    validarDeclaracaoIrcRequest(validarDeclaracaoIrcRequest: ValidarDeclaracaoIrcRequest, callback: (err: any, result: ValidarDeclaracaoIrcRequest, rawResponse: any, soapHeader: any, rawRequest: any) => void): ValidarDeclaracaoIrcResponse;
}
