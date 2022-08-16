import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BierService } from "./bier.service";
import { BierControllerBase } from "./base/bier.controller.base";

@swagger.ApiTags("biers")
@common.Controller("biers")
export class BierController extends BierControllerBase {
  constructor(
    protected readonly service: BierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
