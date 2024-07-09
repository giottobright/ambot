import { Module } from "@nestjs/common";
import { BeerModuleBase } from "./base/beer.module.base";
import { BeerService } from "./beer.service";
import { BeerController } from "./beer.controller";
import { BeerResolver } from "./beer.resolver";

@Module({
  imports: [BeerModuleBase],
  controllers: [BeerController],
  providers: [BeerService, BeerResolver],
  exports: [BeerService],
})
export class BeerModule {}
