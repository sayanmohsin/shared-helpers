"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.competitors = exports.apifyJobUrls = exports.Competitor = void 0;
var CompetitorName;
(function (CompetitorName) {
    CompetitorName["voila"] = "voila";
    CompetitorName["iga"] = "iga";
    CompetitorName["loblaws"] = "loblaws";
    CompetitorName["metro"] = "metro";
    CompetitorName["walmart"] = "walmart";
})(CompetitorName || (CompetitorName = {}));
class Competitor {
    constructor(competitorName) {
        this.name = competitorName;
        this.apifyJobUrl = exports.apifyJobUrls[competitorName];
    }
}
exports.Competitor = Competitor;
const apifyBase = "https://api.apify.com/v2/actor-tasks";
const apifyToken = "QNZj5CLNnESfSeiZebhmzf5Ff";
exports.apifyJobUrls = {
    [CompetitorName.voila]: `${apifyBase}/goodfood~test-voila-pricing-fast/runs?token=${apifyToken}`,
    [CompetitorName.iga]: `${apifyBase}/goodfood~test-iga-pricing-fast/runs?token=${apifyToken}`,
    [CompetitorName.loblaws]: `${apifyBase}/goodfood~test-loblaws-pricing/runs?token=${apifyToken}`,
    [CompetitorName.metro]: `${apifyBase}/goodfood~test-metro-pricing/runs?token=${apifyToken}`,
    [CompetitorName.walmart]: `${apifyBase}/goodfood~test-walmart-pricing/runs?token=${apifyToken}`,
};
exports.competitors = Object.values(CompetitorName).reduce((acc, competitorName) => {
    acc[competitorName] = new Competitor(competitorName);
    return acc;
}, {});
//# sourceMappingURL=competitor.js.map