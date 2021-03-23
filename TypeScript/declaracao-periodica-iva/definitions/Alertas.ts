import { Alerta } from "./Alerta";

/**
 * alertas
 * targetNSAlias `tns`
 * targetNamespace `https://servicos.portaldasfinancas.gov.pt/dpivaws/DeclaracaoPeriodicaIVAWebService`
 */
export interface Alertas {
    /** xsd:boolean */
    temMaisAlertas?: string;
    /** alerta[] */
    alerta?: Array<Alerta>;
}
