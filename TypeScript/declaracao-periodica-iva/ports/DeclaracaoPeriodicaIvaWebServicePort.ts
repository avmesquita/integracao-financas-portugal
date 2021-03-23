import { SubmeterDeclaracaoPeriodicaIvaRequest } from "..\definitions\SubmeterDeclaracaoPeriodicaIvaRequest";
import { SubmeterDeclaracaoPeriodicaIvaResponse } from "..\definitions\SubmeterDeclaracaoPeriodicaIvaResponse";
import { ValidarDeclaracaoPeriodicaIvaRequest } from "..\definitions\ValidarDeclaracaoPeriodicaIvaRequest";
import { ValidarDeclaracaoPeriodicaIvaResponse } from "..\definitions\ValidarDeclaracaoPeriodicaIvaResponse";
import { ObterComprovativoIvaRequest } from "..\definitions\ObterComprovativoIvaRequest";
import { ObterComprovativoIvaResponse } from "..\definitions\ObterComprovativoIvaResponse";
import { PagamentoIvaRequest } from "..\definitions\PagamentoIvaRequest";
import { PagamentoIvaResponse } from "..\definitions\PagamentoIvaResponse";

export interface DeclaracaoPeriodicaIvaWebServicePort {
    submeterDeclaracaoPeriodicaIvaRequest(submeterDeclaracaoPeriodicaIvaRequest: SubmeterDeclaracaoPeriodicaIvaRequest, callback: (err: any, result: SubmeterDeclaracaoPeriodicaIvaRequest, rawResponse: any, soapHeader: any, rawRequest: any) => void): SubmeterDeclaracaoPeriodicaIvaResponse;
    validarDeclaracaoPeriodicaIvaRequest(validarDeclaracaoPeriodicaIvaRequest: ValidarDeclaracaoPeriodicaIvaRequest, callback: (err: any, result: ValidarDeclaracaoPeriodicaIvaRequest, rawResponse: any, soapHeader: any, rawRequest: any) => void): ValidarDeclaracaoPeriodicaIvaResponse;
    obterComprovativoIvaRequest(obterComprovativoIvaRequest: ObterComprovativoIvaRequest, callback: (err: any, result: ObterComprovativoIvaRequest, rawResponse: any, soapHeader: any, rawRequest: any) => void): ObterComprovativoIvaResponse;
    pagamentoIvaRequest(pagamentoIvaRequest: PagamentoIvaRequest, callback: (err: any, result: PagamentoIvaRequest, rawResponse: any, soapHeader: any, rawRequest: any) => void): PagamentoIvaResponse;
}
