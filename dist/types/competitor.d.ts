export declare enum CompetitorName {
    voila = "voila",
    iga = "iga",
    loblaws = "loblaws",
    metro = "metro",
    walmart = "walmart"
}
export declare type Competitors = {
    [name in CompetitorName]: Competitor;
};
export interface ICompetitor {
    name: CompetitorName;
    apifyJobUrl: string;
}
export declare class Competitor implements ICompetitor {
    name: CompetitorName;
    apifyJobUrl: string;
    constructor(competitorName: CompetitorName);
}
//# sourceMappingURL=competitor.d.ts.map