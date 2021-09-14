enum CompetitorName {
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

const apifyBase = "https://api.apify.com/v2/actor-tasks";

const apifyToken = "QNZj5CLNnESfSeiZebhmzf5Ff";

export const apifyJobUrls: { [competitor in CompetitorName]: string } = {
    [CompetitorName.voila]: `${apifyBase}/goodfood~test-voila-pricing-fast/runs?token=${apifyToken}`,
    [CompetitorName.iga]: `${apifyBase}/goodfood~test-iga-pricing-fast/runs?token=${apifyToken}`,
    [CompetitorName.loblaws]: `${apifyBase}/goodfood~test-loblaws-pricing/runs?token=${apifyToken}`,
    [CompetitorName.metro]: `${apifyBase}/goodfood~test-metro-pricing/runs?token=${apifyToken}`,
    [CompetitorName.walmart]: `${apifyBase}/goodfood~test-walmart-pricing/runs?token=${apifyToken}`,
};

export const competitors: Competitors = Object.values(CompetitorName).reduce(
    (acc: Partial<Competitors>, competitorName: CompetitorName) => {
        acc[competitorName] = new Competitor(competitorName);
        return acc;
    },
    {} as Partial<Competitors>
) as Competitors;