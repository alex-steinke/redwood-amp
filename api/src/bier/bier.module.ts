import { Module } from "@nestjs/common";
import { BierModuleBase } from "./base/bier.module.base";
import { BierService } from "./bier.service";
import { BierController } from "./bier.controller";
import { BierResolver } from "./bier.resolver";

@Module({
  imports: [BierModuleBase],
  controllers: [BierController],
  providers: [BierService, BierResolver],
  exports: [BierService],
})
export class BierModule {}
