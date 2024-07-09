import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BarService } from "./bar.service";
import { BarControllerBase } from "./base/bar.controller.base";

@swagger.ApiTags("bars")
@common.Controller("bars")
export class BarController extends BarControllerBase {
  constructor(protected readonly service: BarService) {
    super(service);
  }
}
