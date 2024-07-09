import { Module } from "@nestjs/common";
import { BeerAvailabilityModuleBase } from "./base/beerAvailability.module.base";
import { BeerAvailabilityService } from "./beerAvailability.service";
import { BeerAvailabilityController } from "./beerAvailability.controller";
import { BeerAvailabilityResolver } from "./beerAvailability.resolver";

@Module({
  imports: [BeerAvailabilityModuleBase],
  controllers: [BeerAvailabilityController],
  providers: [BeerAvailabilityService, BeerAvailabilityResolver],
  exports: [BeerAvailabilityService],
})
export class BeerAvailabilityModule {}
