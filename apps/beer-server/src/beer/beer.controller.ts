import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BeerService } from "./beer.service";
import { BeerControllerBase } from "./base/beer.controller.base";

@swagger.ApiTags("beers")
@common.Controller("beers")
export class BeerController extends BeerControllerBase {
  constructor(protected readonly service: BeerService) {
    super(service);
  }
}
