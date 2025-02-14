/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { LocationCreateNestedManyWithoutBarsInput } from "./LocationCreateNestedManyWithoutBarsInput";
import { Type } from "class-transformer";
import { BeerAvailabilityCreateNestedManyWithoutBarsInput } from "./BeerAvailabilityCreateNestedManyWithoutBarsInput";

@InputType()
class BarCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => LocationCreateNestedManyWithoutBarsInput,
  })
  @ValidateNested()
  @Type(() => LocationCreateNestedManyWithoutBarsInput)
  @IsOptional()
  @Field(() => LocationCreateNestedManyWithoutBarsInput, {
    nullable: true,
  })
  locations?: LocationCreateNestedManyWithoutBarsInput;

  @ApiProperty({
    required: false,
    type: () => BeerAvailabilityCreateNestedManyWithoutBarsInput,
  })
  @ValidateNested()
  @Type(() => BeerAvailabilityCreateNestedManyWithoutBarsInput)
  @IsOptional()
  @Field(() => BeerAvailabilityCreateNestedManyWithoutBarsInput, {
    nullable: true,
  })
  beerAvailabilities?: BeerAvailabilityCreateNestedManyWithoutBarsInput;
}

export { BarCreateInput as BarCreateInput };
