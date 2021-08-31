export type TestType = {
    sample_1: string,
    sample_2: string,
}

export * from './modules/prisma.module';

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
