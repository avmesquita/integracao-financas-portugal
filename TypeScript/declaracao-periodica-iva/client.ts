import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { SubmeterDeclaracaoPeriodicaIvaRequest } from "./definitions/SubmeterDeclaracaoPeriodicaIvaRequest";
import { SubmeterDeclaracaoPeriodicaIvaResponse } from "./definitions/SubmeterDeclaracaoPeriodicaIvaResponse";
import { ValidarDeclaracaoPeriodicaIvaRequest } from "./definitions/ValidarDeclaracaoPeriodicaIvaRequest";
import { ValidarDeclaracaoPeriodicaIvaResponse } from "./definitions/ValidarDeclaracaoPeriodicaIvaResponse";
import { ObterComprovativoIvaRequest } from "./definitions/ObterComprovativoIvaRequest";
import { ObterComprovativoIvaResponse } from "./definitions/ObterComprovativoIvaResponse";
import { PagamentoIvaRequest } from "./definitions/PagamentoIvaRequest";
import { PagamentoIvaResponse } from "./definitions/PagamentoIvaResponse";
import { DeclaracaoPeriodicaIvaWebService } from "./services/DeclaracaoPeriodicaIvaWebService";

export interface DeclaracaoPeriodicaIvaWebServiceClient extends SoapClient {
    DeclaracaoPeriodicaIvaWebService: DeclaracaoPeriodicaIvaWebService;
    submeterDeclaracaoAsync(submeterDeclaracaoPeriodicaIvaRequest: SubmeterDeclaracaoPeriodicaIvaRequest): Promise<SubmeterDeclaracaoPeriodicaIvaResponse>;
    validarDeclaracaoAsync(validarDeclaracaoPeriodicaIvaRequest: ValidarDeclaracaoPeriodicaIvaRequest): Promise<ValidarDeclaracaoPeriodicaIvaResponse>;
    obterComprovativoAsync(obterComprovativoIvaRequest: ObterComprovativoIvaRequest): Promise<ObterComprovativoIvaResponse>;
    pagamentoAsync(pagamentoIvaRequest: PagamentoIvaRequest): Promise<PagamentoIvaResponse>;
}

/** Create DeclaracaoPeriodicaIvaWebServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<DeclaracaoPeriodicaIvaWebServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
