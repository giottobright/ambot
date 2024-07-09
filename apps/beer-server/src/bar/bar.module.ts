import { Module } from "@nestjs/common";
import { BarModuleBase } from "./base/bar.module.base";
import { BarService } from "./bar.service";
import { BarController } from "./bar.controller";
import { BarResolver } from "./bar.resolver";

@Module({
  imports: [BarModuleBase],
  controllers: [BarController],
  providers: [BarService, BarResolver],
  exports: [BarService],
})
export class BarModule {}
