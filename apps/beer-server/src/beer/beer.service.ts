import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BeerServiceBase } from "./base/beer.service.base";

@Injectable()
export class BeerService extends BeerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
