
/** imovel */
export interface Imovel {
    /** xs:string|length */
    distrito?: string;
    /** xs:string|length */
    concelho?: string;
    /** xs:string|length */
    freguesia?: string;
    /** xs:string|U,R */
    tipo?: string;
    /** xs:string|maxLength */
    seccao?: string;
    /** xs:string|maxLength */
    artigo?: string;
    /** xs:string|maxLength */
    fracao?: string;
    /** xs:string|maxLength */
    arvCol?: string;
    /** xs:short|pattern */
    codigoPostal?: string;
    /** xs:short|pattern */
    unidadeFuncional?: string;
    /** xs:string|maxLength */
    localidade?: string;
    /** xs:string|maxLength */
    morada?: string;
    /** xs:string|maxLength */
    numeroLote?: string;
    /** xs:string|maxLength */
    andar?: string;
    /** xs:string|maxLength */
    parteArrendada?: string;
    /** xs:boolean */
    parteComum?: string;
    /** xs:boolean */
    bemOmisso?: string;
}
