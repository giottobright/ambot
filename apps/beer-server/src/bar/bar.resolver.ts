import * as graphql from "@nestjs/graphql";
import { BarResolverBase } from "./base/bar.resolver.base";
import { Bar } from "./base/Bar";
import { BarService } from "./bar.service";

@graphql.Resolver(() => Bar)
export class BarResolver extends BarResolverBase {
  constructor(protected readonly service: BarService) {
    super(service);
  }
}
