"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Competitor = exports.CompetitorName = void 0;
const competitor_module_1 = require("../modules/competitor.module");
var CompetitorName;
(function (CompetitorName) {
    CompetitorName["voila"] = "voila";
    CompetitorName["iga"] = "iga";
    CompetitorName["loblaws"] = "loblaws";
    CompetitorName["metro"] = "metro";
    CompetitorName["walmart"] = "walmart";
})(CompetitorName = exports.CompetitorName || (exports.CompetitorName = {}));
class Competitor {
    constructor(competitorName) {
        this.name = competitorName;
        this.apifyJobUrl = competitor_module_1.apifyJobUrls[competitorName];
    }
}
exports.Competitor = Competitor;
//# sourceMappingURL=competitor.js.map