/**
 * Module for Prisma
 */
import * as prisma from '../../prisma/client';
/**
 * function to get prisma
 */
export { prisma };
/**
 * function to connect and get prisma client
 */
export declare const connectAndGetClient: (db_url: string) => Promise<prisma.PrismaClient<{
    datasources: {
        db: {
            url: string;
        };
    };
}, never, false>>;
//# sourceMappingURL=prisma.d.ts.map