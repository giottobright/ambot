import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BeerAvailabilityServiceBase } from "./base/beerAvailability.service.base";

@Injectable()
export class BeerAvailabilityService extends BeerAvailabilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
