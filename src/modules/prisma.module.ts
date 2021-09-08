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
export const connectAndGetClient = async (db_url: string) => {
    try {
        const prisma = new PrismaClient({
            datasources: {
                db: {
                    url: db_url
                },
            },
        })
        await prisma.$connect();
        console.log('connected to database');
        return prisma;
    } catch (e: any) {
        console.log('error connecting to database');
        throw new Error(e.message);
    }
}

export * from '../../prisma/client';
