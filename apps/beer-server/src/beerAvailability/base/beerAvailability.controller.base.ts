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
import { BeerAvailabilityService } from "../beerAvailability.service";
import { BeerAvailabilityCreateInput } from "./BeerAvailabilityCreateInput";
import { BeerAvailability } from "./BeerAvailability";
import { BeerAvailabilityFindManyArgs } from "./BeerAvailabilityFindManyArgs";
import { BeerAvailabilityWhereUniqueInput } from "./BeerAvailabilityWhereUniqueInput";
import { BeerAvailabilityUpdateInput } from "./BeerAvailabilityUpdateInput";

export class BeerAvailabilityControllerBase {
  constructor(protected readonly service: BeerAvailabilityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BeerAvailability })
  async createBeerAvailability(
    @common.Body() data: BeerAvailabilityCreateInput
  ): Promise<BeerAvailability> {
    return await this.service.createBeerAvailability({
      data: {
        ...data,

        beer: data.beer
          ? {
              connect: data.beer,
            }
          : undefined,

        bar: data.bar
          ? {
              connect: data.bar,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BeerAvailability] })
  @ApiNestedQuery(BeerAvailabilityFindManyArgs)
  async beerAvailabilities(
    @common.Req() request: Request
  ): Promise<BeerAvailability[]> {
    const args = plainToClass(BeerAvailabilityFindManyArgs, request.query);
    return this.service.beerAvailabilities({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BeerAvailability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async beerAvailability(
    @common.Param() params: BeerAvailabilityWhereUniqueInput
  ): Promise<BeerAvailability | null> {
    const result = await this.service.beerAvailability({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BeerAvailability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBeerAvailability(
    @common.Param() params: BeerAvailabilityWhereUniqueInput,
    @common.Body() data: BeerAvailabilityUpdateInput
  ): Promise<BeerAvailability | null> {
    try {
      return await this.service.updateBeerAvailability({
        where: params,
        data: {
          ...data,

          beer: data.beer
            ? {
                connect: data.beer,
              }
            : undefined,

          bar: data.bar
            ? {
                connect: data.bar,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: BeerAvailability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBeerAvailability(
    @common.Param() params: BeerAvailabilityWhereUniqueInput
  ): Promise<BeerAvailability | null> {
    try {
      return await this.service.deleteBeerAvailability({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
