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
export const connectAndGetClient = async (db_url: string) => {
    try {
        const prismaConnection = new prisma.PrismaClient({
            datasources: {
                db: {
                    url: db_url
                },
            },
        })
        await prismaConnection.$connect();
        console.log('connected to database');
        return prismaConnection;
    } catch (e: any) {
        console.log('error connecting to database');
        throw new Error(e.message);
    }
}

