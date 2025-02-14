/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BeerService } from "../beer.service";
import { BeerCreateInput } from "./BeerCreateInput";
import { Beer } from "./Beer";
import { BeerFindManyArgs } from "./BeerFindManyArgs";
import { BeerWhereUniqueInput } from "./BeerWhereUniqueInput";
import { BeerUpdateInput } from "./BeerUpdateInput";
import { BeerAvailabilityFindManyArgs } from "../../beerAvailability/base/BeerAvailabilityFindManyArgs";
import { BeerAvailability } from "../../beerAvailability/base/BeerAvailability";
import { BeerAvailabilityWhereUniqueInput } from "../../beerAvailability/base/BeerAvailabilityWhereUniqueInput";

export class BeerControllerBase {
  constructor(protected readonly service: BeerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Beer })
  async createBeer(@common.Body() data: BeerCreateInput): Promise<Beer> {
    return await this.service.createBeer({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        abv: true,
        name: true,
        typeField: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Beer] })
  @ApiNestedQuery(BeerFindManyArgs)
  async beers(@common.Req() request: Request): Promise<Beer[]> {
    const args = plainToClass(BeerFindManyArgs, request.query);
    return this.service.beers({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        abv: true,
        name: true,
        typeField: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Beer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async beer(
    @common.Param() params: BeerWhereUniqueInput
  ): Promise<Beer | null> {
    const result = await this.service.beer({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        abv: true,
        name: true,
        typeField: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Beer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBeer(
    @common.Param() params: BeerWhereUniqueInput,
    @common.Body() data: BeerUpdateInput
  ): Promise<Beer | null> {
    try {
      return await this.service.updateBeer({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          abv: true,
          name: true,
          typeField: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Beer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBeer(
    @common.Param() params: BeerWhereUniqueInput
  ): Promise<Beer | null> {
    try {
      return await this.service.deleteBeer({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          abv: true,
          name: true,
          typeField: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/beerAvailabilities")
  @ApiNestedQuery(BeerAvailabilityFindManyArgs)
  async findBeerAvailabilities(
    @common.Req() request: Request,
    @common.Param() params: BeerWhereUniqueInput
  ): Promise<BeerAvailability[]> {
    const query = plainToClass(BeerAvailabilityFindManyArgs, request.query);
    const results = await this.service.findBeerAvailabilities(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        availability: true,

        beer: {
          select: {
            id: true,
          },
        },

        bar: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/beerAvailabilities")
  async connectBeerAvailabilities(
    @common.Param() params: BeerWhereUniqueInput,
    @common.Body() body: BeerAvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      beerAvailabilities: {
        connect: body,
      },
    };
    await this.service.updateBeer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/beerAvailabilities")
  async updateBeerAvailabilities(
    @common.Param() params: BeerWhereUniqueInput,
    @common.Body() body: BeerAvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      beerAvailabilities: {
        set: body,
      },
    };
    await this.service.updateBeer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/beerAvailabilities")
  async disconnectBeerAvailabilities(
    @common.Param() params: BeerWhereUniqueInput,
    @common.Body() body: BeerAvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      beerAvailabilities: {
        disconnect: body,
      },
    };
    await this.service.updateBeer({
      where: params,
      data,
      select: { id: true },
    });
  }
}
