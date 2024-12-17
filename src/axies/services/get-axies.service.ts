import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AquaticClass } from '../schemas/aquatic-class.schema';
import { BeastClass } from '../schemas/beast-class.schema';
import { BirdClass } from '../schemas/bird-class.schema';
import { BugClass } from '../schemas/bug-class.schema';
import { DawnClass } from '../schemas/dawn-class.schema';
import { DuskClass } from '../schemas/dusk-class.schema';
import { MechClass } from '../schemas/mech-class.schema';
import { PlantClass } from '../schemas/plant-class.schema';
import { ReptileClass } from '../schemas/reptile-class.schema';
import { Axie, AxieClass } from '../schemas/axie.schema';

type GetAxiesServiceResponse = { [key in AxieClass]: Axie[] };

@Injectable()
export class GetAxiesService {
  models = [
    this.aquaticClassModel,
    this.beastClassModel,
    this.plantClassModel,
    this.birdClassModel,
    this.bugClassModel,
    this.reptileClassModel,
    this.mechClassModel,
    this.dawnClassModel,
    this.duskClassModel,
  ];

  constructor(
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

  public async run() {
    const result = {} as GetAxiesServiceResponse;

    for (const model of this.models) {
      const axies = await model.find().sort({ currentPriceUsd: 'asc' });
      if (axies.length > 0) {
        const axieClass = axies[0].axieClass;
        result[axieClass] = axies;
      }
    }

    return result;
  }
}
