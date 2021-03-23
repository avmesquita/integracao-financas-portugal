import { DadosPedido } from "./DadosPedido";
import { Faturas } from "./Faturas";

/** tns:SubmeterPedidoCobrancaDuvidosaRequestType */
export interface TnssubmeterPedidoCobrancaDuvidosaRequestType {
    /** DadosPedido */
    dadosPedido?: DadosPedido;
    /** Faturas */
    faturas?: Faturas;
}
