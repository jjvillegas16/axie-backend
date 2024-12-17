import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AxiesController } from './axies.controller';
import { ImportAxiesService } from './services/import-axies.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BeastClass, BeastSchema } from './schemas/beast-class.schema';
import { AquaticClass, AquaticSchema } from './schemas/aquatic-class.schema';
import { PlantClass, PlantSchema } from './schemas/plant-class.schema';
import { BirdClass, BirdSchema } from './schemas/bird-class.schema';
import { BugClass, BugSchema } from './schemas/bug-class.schema';
import { ReptileClass, ReptileSchema } from './schemas/reptile-class.schema';
import { MechClass, MechSchema } from './schemas/mech-class.schema';
import { DawnClass, DawnSchema } from './schemas/dawn-class.schema';
import { DuskClass, DuskSchema } from './schemas/dusk-class.schema';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          baseURL: configService.get('axie.endpoint'),
          headers: configService.get('http.headers'),
        };
      },
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: BeastClass.name, schema: BeastSchema },
      { name: AquaticClass.name, schema: AquaticSchema },
      { name: PlantClass.name, schema: PlantSchema },
      { name: BirdClass.name, schema: BirdSchema },
      { name: BugClass.name, schema: BugSchema },
      { name: ReptileClass.name, schema: ReptileSchema },
      { name: MechClass.name, schema: MechSchema },
      { name: DawnClass.name, schema: DawnSchema },
      { name: DuskClass.name, schema: DuskSchema },
    ]),
  ],
  controllers: [AxiesController],
  providers: [ImportAxiesService],
})
export class AxiesModule {}
