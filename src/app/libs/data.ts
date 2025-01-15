import { prisma } from "../db/prisma";
import { Time } from "@prisma/client";

// TO DO: Change the query to only fetch the ones done on the current Day.

export async function fetchTime(): Promise<Time[]> {
  try {
    const times = await prisma.time.findMany({
      orderBy:{
        createAt: 'asc',
      }
    });
    return times;
  } catch (error) {
    throw new Error('Failed to fetch time data.');
  }
}