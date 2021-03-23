import { Fatura } from "./Fatura";

/**
 * Faturas
 * targetNSAlias `tns`
 * targetNamespace `http://servicos.portaldasfinancas.gov.pt/PedidoCobrancaDuvidosa/`
 */
export interface Faturas {
    /** Fatura[] */
    fatura?: Array<Fatura>;
}
