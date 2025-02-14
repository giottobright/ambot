/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BeerAvailability } from "./BeerAvailability";
import { BeerAvailabilityCountArgs } from "./BeerAvailabilityCountArgs";
import { BeerAvailabilityFindManyArgs } from "./BeerAvailabilityFindManyArgs";
import { BeerAvailabilityFindUniqueArgs } from "./BeerAvailabilityFindUniqueArgs";
import { CreateBeerAvailabilityArgs } from "./CreateBeerAvailabilityArgs";
import { UpdateBeerAvailabilityArgs } from "./UpdateBeerAvailabilityArgs";
import { DeleteBeerAvailabilityArgs } from "./DeleteBeerAvailabilityArgs";
import { Beer } from "../../beer/base/Beer";
import { Bar } from "../../bar/base/Bar";
import { BeerAvailabilityService } from "../beerAvailability.service";
@graphql.Resolver(() => BeerAvailability)
export class BeerAvailabilityResolverBase {
  constructor(protected readonly service: BeerAvailabilityService) {}

  async _beerAvailabilitiesMeta(
    @graphql.Args() args: BeerAvailabilityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BeerAvailability])
  async beerAvailabilities(
    @graphql.Args() args: BeerAvailabilityFindManyArgs
  ): Promise<BeerAvailability[]> {
    return this.service.beerAvailabilities(args);
  }

  @graphql.Query(() => BeerAvailability, { nullable: true })
  async beerAvailability(
    @graphql.Args() args: BeerAvailabilityFindUniqueArgs
  ): Promise<BeerAvailability | null> {
    const result = await this.service.beerAvailability(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BeerAvailability)
  async createBeerAvailability(
    @graphql.Args() args: CreateBeerAvailabilityArgs
  ): Promise<BeerAvailability> {
    return await this.service.createBeerAvailability({
      ...args,
      data: {
        ...args.data,

        beer: args.data.beer
          ? {
              connect: args.data.beer,
            }
          : undefined,

        bar: args.data.bar
          ? {
              connect: args.data.bar,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => BeerAvailability)
  async updateBeerAvailability(
    @graphql.Args() args: UpdateBeerAvailabilityArgs
  ): Promise<BeerAvailability | null> {
    try {
      return await this.service.updateBeerAvailability({
        ...args,
        data: {
          ...args.data,

          beer: args.data.beer
            ? {
                connect: args.data.beer,
              }
            : undefined,

          bar: args.data.bar
            ? {
                connect: args.data.bar,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BeerAvailability)
  async deleteBeerAvailability(
    @graphql.Args() args: DeleteBeerAvailabilityArgs
  ): Promise<BeerAvailability | null> {
    try {
      return await this.service.deleteBeerAvailability(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Beer, {
    nullable: true,
    name: "beer",
  })
  async getBeer(
    @graphql.Parent() parent: BeerAvailability
  ): Promise<Beer | null> {
    const result = await this.service.getBeer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Bar, {
    nullable: true,
    name: "bar",
  })
  async getBar(
    @graphql.Parent() parent: BeerAvailability
  ): Promise<Bar | null> {
    const result = await this.service.getBar(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
