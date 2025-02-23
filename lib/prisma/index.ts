import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV === "production") globalThis.prisma = client;

if (!globalThis.prisma) {
  client.$connect().catch((err) => {
    console.error("❌ Prisma connection error:", err);
  });
  globalThis.prisma = client;
}
