"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.competitors = exports.apifyJobUrls = void 0;
const competitor_1 = require("../types/competitor");
const apifyBase = "https://api.apify.com/v2/actor-tasks";
const apifyToken = "QNZj5CLNnESfSeiZebhmzf5Ff";
exports.apifyJobUrls = {
    [competitor_1.CompetitorName.voila]: `${apifyBase}/goodfood~test-voila-pricing-fast/runs?token=${apifyToken}`,
    [competitor_1.CompetitorName.iga]: `${apifyBase}/goodfood~test-iga-pricing-fast/runs?token=${apifyToken}`,
    [competitor_1.CompetitorName.loblaws]: `${apifyBase}/goodfood~test-loblaws-pricing/runs?token=${apifyToken}`,
    [competitor_1.CompetitorName.metro]: `${apifyBase}/goodfood~test-metro-pricing/runs?token=${apifyToken}`,
    [competitor_1.CompetitorName.walmart]: `${apifyBase}/goodfood~test-walmart-pricing/runs?token=${apifyToken}`,
};
exports.competitors = Object.values(competitor_1.CompetitorName).reduce((acc, competitorName) => {
    acc[competitorName] = new competitor_1.Competitor(competitorName);
    return acc;
}, {});
//# sourceMappingURL=competitor.module.js.map