import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BeerAvailabilityService } from "./beerAvailability.service";
import { BeerAvailabilityControllerBase } from "./base/beerAvailability.controller.base";

@swagger.ApiTags("beerAvailabilities")
@common.Controller("beerAvailabilities")
export class BeerAvailabilityController extends BeerAvailabilityControllerBase {
  constructor(protected readonly service: BeerAvailabilityService) {
    super(service);
  }
}
