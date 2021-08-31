import { PrismaClient } from '../../prisma/client';

export * from '../../prisma/client';

/**
 * function to get prisma 
 */
export { PrismaClient };

/**
 * function to connect and get prisma client
 */
export const connectAndGetClient = async () => {
    try {
        const prisma = new PrismaClient;
        await prisma.$connect();
        console.log('connected to database');
        return prisma;
    } catch (e: any) {
        console.log('error connecting to database');
        throw new Error(e.message);
    }
}

