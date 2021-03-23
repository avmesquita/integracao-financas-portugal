import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { TnssubmeterPedidoCobrancaDuvidosaRequestType } from "./definitions/TnssubmeterPedidoCobrancaDuvidosaRequestType";
import { TnssubmeterPedidoCobrancaDuvidosaResponseType } from "./definitions/TnssubmeterPedidoCobrancaDuvidosaResponseType";
import { TnspesquisarPedidoCobrancaDuvidosaRequestType } from "./definitions/TnspesquisarPedidoCobrancaDuvidosaRequestType";
import { TnspesquisarPedidoCobrancaDuvidosaResponseType } from "./definitions/TnspesquisarPedidoCobrancaDuvidosaResponseType";
import { PedidoCobrancaDuvidosaService } from "./services/PedidoCobrancaDuvidosaService";

export interface CredincwsClient extends SoapClient {
    PedidoCobrancaDuvidosaService: PedidoCobrancaDuvidosaService;
    SubmeterPedidoCobrancaDuvidosaAsync(submeterPedidoCobrancaDuvidosaRequestElem: TnssubmeterPedidoCobrancaDuvidosaRequestType): Promise<TnssubmeterPedidoCobrancaDuvidosaResponseType>;
    PesquisarPedidoCobrancaDuvidosaAsync(pesquisarPedidoCobrancaDuvidosaRequestElem: TnspesquisarPedidoCobrancaDuvidosaRequestType): Promise<TnspesquisarPedidoCobrancaDuvidosaResponseType>;
}

/** Create CredincwsClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CredincwsClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
