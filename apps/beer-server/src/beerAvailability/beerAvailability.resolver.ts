import * as graphql from "@nestjs/graphql";
import { BeerAvailabilityResolverBase } from "./base/beerAvailability.resolver.base";
import { BeerAvailability } from "./base/BeerAvailability";
import { BeerAvailabilityService } from "./beerAvailability.service";

@graphql.Resolver(() => BeerAvailability)
export class BeerAvailabilityResolver extends BeerAvailabilityResolverBase {
  constructor(protected readonly service: BeerAvailabilityService) {
    super(service);
  }
}
