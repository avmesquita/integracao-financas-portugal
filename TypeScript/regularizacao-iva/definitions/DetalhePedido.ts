import { Periodo } from "./Periodo";

/**
 * DetalhePedido
 * targetNSAlias `tns`
 * targetNamespace `http://servicos.portaldasfinancas.gov.pt/PedidoCobrancaDuvidosa/`
 */
export interface DetalhePedido {
    /** DateType|xs:date */
    dataCertificacaoRoc?: string;
    /** DateType|xs:date */
    dataAceitacaoAt?: string;
    /** DateType|xs:date */
    dataNotificacaoCredor?: string;
    /** xs:string */
    referenciaNotificacaoCredor?: string;
    /** DateType|xs:date */
    dataLimiteUtilizacao?: string;
    /** xs:decimal */
    valorTotalPedido?: string;
    /** xs:decimal */
    valorIvaDeferido?: string;
    /** xs:decimal */
    valorIvaIndeferido?: string;
    /** xs:integer */
    numeroDpAnexo40?: string;
    /** PeriodoDPAnexo40 */
    periodoDpAnexo40?: Periodo;
}
