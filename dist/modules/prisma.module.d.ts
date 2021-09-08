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
export declare const connectAndGetClient: () => Promise<PrismaClient<import("../../prisma/client").Prisma.PrismaClientOptions, never, import("../../prisma/client").Prisma.RejectOnNotFound | import("../../prisma/client").Prisma.RejectPerOperation | undefined>>;
export * from '../../prisma/client';
//# sourceMappingURL=prisma.module.d.ts.map