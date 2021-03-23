import { Imoveis } from "./Imoveis";
import { Locadores } from "./Locadores";
import { Locatarios } from "./Locatarios";
import { LocadoresPrevios } from "./LocadoresPrevios";

/** registarDadosContratoRequest */
export interface RegistarDadosContratoRequest {
    /** xs:int|pattern */
    nifDeclarante?: string;
    /** xs:string|maxLength */
    referencia?: string;
    /** xs:string|ARREND,SUBARR,PROMES,CEDENC,ALUGUE */
    tipo?: string;
    /** xs:string|H_PERM,H_NPER,N_HABI */
    finalidade?: string;
    /** xs:date */
    dataInicio?: string;
    /** xs:date */
    dataTermo?: string;
    /** xs:boolean */
    renovavel?: string;
    /** imoveis */
    imoveis?: Imoveis;
    /** locadores */
    locadores?: Locadores;
    /** locatarios */
    locatarios?: Locatarios;
    /** xs:decimal */
    valorRenda?: string;
    /** xs:decimal */
    valorDespesas?: string;
    /** xs:decimal */
    valorRendaMaxima?: string;
    /** xs:string|MENSAL,MENORM */
    periodoRenda?: string;
    /** locadoresPrevios */
    locadoresPrevios?: LocadoresPrevios;
    /** xs:string|maxLength */
    observacoes?: string;
    /** xs:int|pattern */
    nifAutorizado?: string;
}
