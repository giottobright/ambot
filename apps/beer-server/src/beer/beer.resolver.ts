import * as graphql from "@nestjs/graphql";
import { BeerResolverBase } from "./base/beer.resolver.base";
import { Beer } from "./base/Beer";
import { BeerService } from "./beer.service";

@graphql.Resolver(() => Beer)
export class BeerResolver extends BeerResolverBase {
  constructor(protected readonly service: BeerService) {
    super(service);
  }
}
