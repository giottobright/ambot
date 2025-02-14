/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  BeerAvailability as PrismaBeerAvailability,
  Beer as PrismaBeer,
  Bar as PrismaBar,
} from "@prisma/client";

export class BeerAvailabilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BeerAvailabilityCountArgs, "select">
  ): Promise<number> {
    return this.prisma.beerAvailability.count(args);
  }

  async beerAvailabilities(
    args: Prisma.BeerAvailabilityFindManyArgs
  ): Promise<PrismaBeerAvailability[]> {
    return this.prisma.beerAvailability.findMany(args);
  }
  async beerAvailability(
    args: Prisma.BeerAvailabilityFindUniqueArgs
  ): Promise<PrismaBeerAvailability | null> {
    return this.prisma.beerAvailability.findUnique(args);
  }
  async createBeerAvailability(
    args: Prisma.BeerAvailabilityCreateArgs
  ): Promise<PrismaBeerAvailability> {
    return this.prisma.beerAvailability.create(args);
  }
  async updateBeerAvailability(
    args: Prisma.BeerAvailabilityUpdateArgs
  ): Promise<PrismaBeerAvailability> {
    return this.prisma.beerAvailability.update(args);
  }
  async deleteBeerAvailability(
    args: Prisma.BeerAvailabilityDeleteArgs
  ): Promise<PrismaBeerAvailability> {
    return this.prisma.beerAvailability.delete(args);
  }

  async getBeer(parentId: string): Promise<PrismaBeer | null> {
    return this.prisma.beerAvailability
      .findUnique({
        where: { id: parentId },
      })
      .beer();
  }

  async getBar(parentId: string): Promise<PrismaBar | null> {
    return this.prisma.beerAvailability
      .findUnique({
        where: { id: parentId },
      })
      .bar();
  }
}
