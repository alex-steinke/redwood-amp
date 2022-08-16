/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BierWhereInput } from "./BierWhereInput";
import { Type } from "class-transformer";
import { BierOrderByInput } from "./BierOrderByInput";

@ArgsType()
class BierFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BierWhereInput,
  })
  @Field(() => BierWhereInput, { nullable: true })
  @Type(() => BierWhereInput)
  where?: BierWhereInput;

  @ApiProperty({
    required: false,
    type: [BierOrderByInput],
  })
  @Field(() => [BierOrderByInput], { nullable: true })
  @Type(() => BierOrderByInput)
  orderBy?: Array<BierOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BierFindManyArgs };
