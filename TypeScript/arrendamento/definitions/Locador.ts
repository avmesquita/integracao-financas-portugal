
/** locador */
export interface Locador {
    /** xs:int|pattern */
    nif?: string;
    /** xs:string|pattern */
    quotaParte?: string;
    /** xs:string|CO_GER,CO_ADQ */
    regimeCasamento?: string;
    /** xs:int|pattern */
    nifConjuge?: string;
    /** xs:string|BNF001,BNF002,BNF003,BNF004,BNF005,BNF006,BNF007,BNF008,BNF009,BNF010,BNF011,BNF012,BNF013,BNF014,BNF015,BNF016 */
    beneficio?: string;
}
