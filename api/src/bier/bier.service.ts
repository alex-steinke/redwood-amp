import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BierServiceBase } from "./base/bier.service.base";

@Injectable()
export class BierService extends BierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
