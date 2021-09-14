/**
 * Module for Prisma
 */
import { PrismaClient } from '../../prisma/client';
/**
 * function to get prisma
 */
export { PrismaClient };
/**
 * function to connect and get prisma client
 */
export declare const connectAndGetClient: (db_url: string) => Promise<PrismaClient<{
    datasources: {
        db: {
            url: string;
        };
    };
}, never, false>>;
export * from '../../prisma/client';
//# sourceMappingURL=prisma.d.ts.map