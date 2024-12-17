import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GetAxiesListDto } from './dtos/get-axies-list.dto';
import { ImportAxiesService } from './services/import-axies.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetAxiesService } from './services/get-axies.service';

@UseGuards(JwtAuthGuard)
@Controller('axies')
export class AxiesController {
  constructor(
    private readonly getAxiesService: GetAxiesService,
    private readonly importAxiesService: ImportAxiesService,
  ) {}

  @Get()
  async getAxies() {
    return await this.getAxiesService.run();
  }

  @Post('/import')
  async importAxies(@Body() getAxiesListDto: GetAxiesListDto) {
    return await this.importAxiesService.run(getAxiesListDto);
  }
}
