import { Alerta } from "./Alerta";

/**
 * alertas
 * targetNSAlias `tns`
 * targetNamespace `https://servicos.portaldasfinancas.gov.pt/dm22ircws/SubmeterDeclaracaoIRCService/2020`
 */
export interface Alertas {
    /** xsd:boolean */
    temMaisAlertas?: string;
    /** alerta[] */
    alerta?: Array<Alerta>;
}
