import { Locadores1 } from "./Locadores1";
import { Locatarios1 } from "./Locatarios1";
import { Herdeiros } from "./Herdeiros";

/** emitirReciboRequest */
export interface EmitirReciboRequest {
    /** xs:long */
    numeroContrato?: string;
    /** xs:int|pattern */
    nifEmitente?: string;
    /** locadores */
    locadores?: Locadores1;
    /** locatarios */
    locatarios?: Locatarios1;
    /** xs:string|ARREND,SUBARR,CEDENC,ALUGUE */
    tipo?: string;
    /** xs:date */
    dataInicio?: string;
    /** xs:date */
    dataFim?: string;
    /** xs:string|RENDAC,CAUCAO,ADIANT */
    tipoImportancia?: string;
    /** xs:decimal */
    valor?: string;
    /** herdeiros */
    herdeiros?: Herdeiros;
    /** xs:date */
    dataRecebimento?: string;
}
