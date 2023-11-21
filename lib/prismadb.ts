import { PrismaClient } from "@prisma/client";

declare global{
    var primsa: PrismaClient | undefined;
};

const primsadb = globalThis.primsa || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.primsa = primsadb;

export default primsadb;