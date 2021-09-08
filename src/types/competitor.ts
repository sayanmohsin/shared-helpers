import { apifyJobUrls } from "../modules/competitor.module";

export enum CompetitorName {
    voila = "voila",
    iga = "iga",
    loblaws = "loblaws",
    metro = "metro",
    walmart = "walmart",
}

export type Competitors = {
    [name in CompetitorName]: Competitor;
};

export interface ICompetitor {
    name: CompetitorName;
    apifyJobUrl: string;
}

export class Competitor implements ICompetitor {
    name: CompetitorName;
    apifyJobUrl: string;
    constructor(competitorName: CompetitorName) {
        this.name = competitorName;
        this.apifyJobUrl = apifyJobUrls[competitorName];
    }
}