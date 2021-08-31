import { PrismaClient } from '../../prisma/client';
export * from '../../prisma/client';
/**
 * function to get prisma
 */
export { PrismaClient };
/**
 * function to connect and get prisma client
 */
export declare const connectAndGetClient: () => Promise<PrismaClient<import("../../prisma/client").Prisma.PrismaClientOptions, never, import("../../prisma/client").Prisma.RejectOnNotFound | import("../../prisma/client").Prisma.RejectPerOperation | undefined>>;
//# sourceMappingURL=prisma.module.d.ts.map