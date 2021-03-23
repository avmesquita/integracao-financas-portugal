import { Pedido } from "./Pedido";
import { DetalhePedido } from "./DetalhePedido";
import { Faturas } from "./Faturas";

/**
 * InformacaoPedido
 * targetNSAlias `tns`
 * targetNamespace `http://servicos.portaldasfinancas.gov.pt/PedidoCobrancaDuvidosa/`
 */
export interface InformacaoPedido {
    /** Pedido */
    pedido?: Pedido;
    /** DetalhePedido */
    detalhePedido?: DetalhePedido;
    /** Faturas */
    faturas?: Faturas;
}
