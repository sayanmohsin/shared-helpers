"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./modules/prisma.module"), exports);
/**
 * function to get prisma module
 */
// export const getPrisma = async () => {
//     try {
//         const prismaModule = await import('./modules/prisma.module');
//         console.log('prismaModule: ', prismaModule);
//     } catch (e: any) {
//         throw new Error(e.message);
//     }
// };
//test
// (async () => {
//     const r = getPrisma();
//     console.log('r: ', r);
// })();
//# sourceMappingURL=index.js.map