import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { firstValueFrom, catchError } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { BeastClass } from '../schemas/beast-class.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AquaticClass } from '../schemas/aquatic-class.schema';
import { AxieResponse, GetAxieBriefListResponse } from '../types';
import { GetAxiesListDto } from '../dtos/get-axies-list.dto';
import { getAxieBriefList } from '../graphql-queries/get-axie-brief-list';
import { groupBy } from '../../common/utils/array';
import { PlantClass } from '../schemas/plant-class.schema';
import { BirdClass } from '../schemas/bird-class.schema';
import { BugClass } from '../schemas/bug-class.schema';
import { ReptileClass } from '../schemas/reptile-class.schema';
import { MechClass } from '../schemas/mech-class.schema';
import { DawnClass } from '../schemas/dawn-class.schema';
import { DuskClass } from '../schemas/dusk-class.schema';
import { Axie, AxieClass } from '../schemas/axie.schema';

@Injectable()
export class ImportAxiesService {
  private readonly logger = new Logger(ImportAxiesService.name);

  modelMapping = {
    Aquatic: this.aquaticClassModel,
    Beast: this.beastClassModel,
    Plant: this.plantClassModel,
    Bird: this.birdClassModel,
    Bug: this.bugClassModel,
    Reptile: this.reptileClassModel,
    Mech: this.mechClassModel,
    Dawn: this.dawnClassModel,
    Dusk: this.duskClassModel,
  } as const;

  constructor(
    private readonly httpService: HttpService,
    @InjectModel(BeastClass.name)
    private readonly beastClassModel: Model<BeastClass>,
    @InjectModel(AquaticClass.name)
    private readonly aquaticClassModel: Model<AquaticClass>,
    @InjectModel(PlantClass.name)
    private readonly plantClassModel: Model<PlantClass>,
    @InjectModel(BirdClass.name)
    private readonly birdClassModel: Model<BirdClass>,
    @InjectModel(BugClass.name)
    private readonly bugClassModel: Model<BugClass>,
    @InjectModel(ReptileClass.name)
    private readonly reptileClassModel: Model<ReptileClass>,
    @InjectModel(MechClass.name)
    private readonly mechClassModel: Model<MechClass>,
    @InjectModel(DawnClass.name)
    private readonly dawnClassModel: Model<DawnClass>,
    @InjectModel(DuskClass.name)
    private readonly duskClassModel: Model<DuskClass>,
  ) {}

  public async run(dto: GetAxiesListDto) {
    // TODO: find a way to make this extendable ie strategy pattern
    const body = getAxieBriefList(dto);

    // get the axies from the axie infinity graphql api endpoint
    const { data: response } = await firstValueFrom(
      this.httpService.post<GetAxieBriefListResponse>('', body).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response?.data);
          throw error;
        }),
      ),
    );

    const axiesResponse = response.data.axies.results;
    const axies = this.transformResponseToAxieClass(axiesResponse);

    // group axies by class
    const axiesGroupedByClass = groupBy(axies, 'axieClass');

    // save the axies on the db
    Object.keys(axiesGroupedByClass).forEach(async (axieClass: AxieClass) => {
      const model = this.modelMapping[axieClass];
      await model.insertMany(axiesGroupedByClass[axieClass]);
    });

    return { message: 'Successfully imported axies' };
  }

  private transformResponseToAxieClass(axiesResponse: AxieResponse[]): Axie[] {
    return axiesResponse.map((axieResponse) => {
      const { id, name, stage } = axieResponse;
      return {
        id,
        name,
        stage,
        axieClass: axieResponse.class,
        currentPriceUsd: axieResponse.order.currentPriceUsd,
      };
    });
  }
}
