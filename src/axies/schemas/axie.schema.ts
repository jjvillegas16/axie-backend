import { Prop } from '@nestjs/mongoose';

export type AxieClass =
  | 'Beast'
  | 'Aquatic'
  | 'Plant'
  | 'Bird'
  | 'Bug'
  | 'Reptile'
  | 'Mech'
  | 'Dawn'
  | 'Dusk';

export class Axie {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  stage: number;

  @Prop()
  axieClass: AxieClass;

  @Prop()
  currentPriceUsd: string;
}
