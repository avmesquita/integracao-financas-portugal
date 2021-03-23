import { TnssubmeterPedidoCobrancaDuvidosaRequestType } from "..\definitions\TnssubmeterPedidoCobrancaDuvidosaRequestType";
import { TnssubmeterPedidoCobrancaDuvidosaResponseType } from "..\definitions\TnssubmeterPedidoCobrancaDuvidosaResponseType";
import { TnspesquisarPedidoCobrancaDuvidosaRequestType } from "..\definitions\TnspesquisarPedidoCobrancaDuvidosaRequestType";
import { TnspesquisarPedidoCobrancaDuvidosaResponseType } from "..\definitions\TnspesquisarPedidoCobrancaDuvidosaResponseType";

export interface PedidoCobrancaDuvidosaPortType {
    submeterPedidoCobrancaDuvidosaRequestElem(submeterPedidoCobrancaDuvidosaRequestElem: TnssubmeterPedidoCobrancaDuvidosaRequestType, callback: (err: any, result: TnssubmeterPedidoCobrancaDuvidosaRequestType, rawResponse: any, soapHeader: any, rawRequest: any) => void): TnssubmeterPedidoCobrancaDuvidosaResponseType;
    pesquisarPedidoCobrancaDuvidosaRequestElem(pesquisarPedidoCobrancaDuvidosaRequestElem: TnspesquisarPedidoCobrancaDuvidosaRequestType, callback: (err: any, result: TnspesquisarPedidoCobrancaDuvidosaRequestType, rawResponse: any, soapHeader: any, rawRequest: any) => void): TnspesquisarPedidoCobrancaDuvidosaResponseType;
}
