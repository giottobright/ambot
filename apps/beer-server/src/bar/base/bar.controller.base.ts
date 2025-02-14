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
import { BarService } from "../bar.service";
import { BarCreateInput } from "./BarCreateInput";
import { Bar } from "./Bar";
import { BarFindManyArgs } from "./BarFindManyArgs";
import { BarWhereUniqueInput } from "./BarWhereUniqueInput";
import { BarUpdateInput } from "./BarUpdateInput";
import { LocationFindManyArgs } from "../../location/base/LocationFindManyArgs";
import { Location } from "../../location/base/Location";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { BeerAvailabilityFindManyArgs } from "../../beerAvailability/base/BeerAvailabilityFindManyArgs";
import { BeerAvailability } from "../../beerAvailability/base/BeerAvailability";
import { BeerAvailabilityWhereUniqueInput } from "../../beerAvailability/base/BeerAvailabilityWhereUniqueInput";

export class BarControllerBase {
  constructor(protected readonly service: BarService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bar })
  async createBar(@common.Body() data: BarCreateInput): Promise<Bar> {
    return await this.service.createBar({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        phoneNumber: true,
        address: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Bar] })
  @ApiNestedQuery(BarFindManyArgs)
  async bars(@common.Req() request: Request): Promise<Bar[]> {
    const args = plainToClass(BarFindManyArgs, request.query);
    return this.service.bars({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        phoneNumber: true,
        address: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bar(@common.Param() params: BarWhereUniqueInput): Promise<Bar | null> {
    const result = await this.service.bar({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        phoneNumber: true,
        address: true,
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
  @swagger.ApiOkResponse({ type: Bar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBar(
    @common.Param() params: BarWhereUniqueInput,
    @common.Body() data: BarUpdateInput
  ): Promise<Bar | null> {
    try {
      return await this.service.updateBar({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          phoneNumber: true,
          address: true,
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
  @swagger.ApiOkResponse({ type: Bar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBar(
    @common.Param() params: BarWhereUniqueInput
  ): Promise<Bar | null> {
    try {
      return await this.service.deleteBar({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          phoneNumber: true,
          address: true,
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

  @common.Get("/:id/locations")
  @ApiNestedQuery(LocationFindManyArgs)
  async findLocations(
    @common.Req() request: Request,
    @common.Param() params: BarWhereUniqueInput
  ): Promise<Location[]> {
    const query = plainToClass(LocationFindManyArgs, request.query);
    const results = await this.service.findLocations(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        longitude: true,
        latitude: true,

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

  @common.Post("/:id/locations")
  async connectLocations(
    @common.Param() params: BarWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      locations: {
        connect: body,
      },
    };
    await this.service.updateBar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/locations")
  async updateLocations(
    @common.Param() params: BarWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      locations: {
        set: body,
      },
    };
    await this.service.updateBar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/locations")
  async disconnectLocations(
    @common.Param() params: BarWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      locations: {
        disconnect: body,
      },
    };
    await this.service.updateBar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/beerAvailabilities")
  @ApiNestedQuery(BeerAvailabilityFindManyArgs)
  async findBeerAvailabilities(
    @common.Req() request: Request,
    @common.Param() params: BarWhereUniqueInput
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
    @common.Param() params: BarWhereUniqueInput,
    @common.Body() body: BeerAvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      beerAvailabilities: {
        connect: body,
      },
    };
    await this.service.updateBar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/beerAvailabilities")
  async updateBeerAvailabilities(
    @common.Param() params: BarWhereUniqueInput,
    @common.Body() body: BeerAvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      beerAvailabilities: {
        set: body,
      },
    };
    await this.service.updateBar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/beerAvailabilities")
  async disconnectBeerAvailabilities(
    @common.Param() params: BarWhereUniqueInput,
    @common.Body() body: BeerAvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      beerAvailabilities: {
        disconnect: body,
      },
    };
    await this.service.updateBar({
      where: params,
      data,
      select: { id: true },
    });
  }
}
