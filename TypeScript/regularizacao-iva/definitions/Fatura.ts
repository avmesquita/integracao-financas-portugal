import { Periodo } from "./Periodo";

/**
 * Fatura
 * targetNSAlias `tns`
 * targetNamespace `http://servicos.portaldasfinancas.gov.pt/PedidoCobrancaDuvidosa/`
 */
export interface Fatura {
    /** NumeroFaturaType|xs:string|minLength,maxLength */
    numeroFatura?: string;
    /** DateType|xs:date */
    dataEmissaoFatura?: string;
    /** DateType|xs:date */
    dataVencimentoCredito?: string;
    /** Periodo */
    periodo?: Periodo;
    /** xs:decimal */
    baseTributavel?: string;
    /** xs:decimal */
    impostoFat?: string;
    /** xs:decimal */
    ivaRegularizar?: string;
}
