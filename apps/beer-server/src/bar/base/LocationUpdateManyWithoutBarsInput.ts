/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LocationUpdateManyWithoutBarsInput {
  @Field(() => [LocationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocationWhereUniqueInput],
  })
  connect?: Array<LocationWhereUniqueInput>;

  @Field(() => [LocationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocationWhereUniqueInput],
  })
  disconnect?: Array<LocationWhereUniqueInput>;

  @Field(() => [LocationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocationWhereUniqueInput],
  })
  set?: Array<LocationWhereUniqueInput>;
}

export { LocationUpdateManyWithoutBarsInput as LocationUpdateManyWithoutBarsInput };
