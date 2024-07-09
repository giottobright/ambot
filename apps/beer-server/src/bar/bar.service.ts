import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BarServiceBase } from "./base/bar.service.base";

@Injectable()
export class BarService extends BarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
