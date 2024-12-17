import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GetAxiesListDto } from './dtos/get-axies-list.dto';
import { ImportAxiesService } from './services/import-axies.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetAxiesService } from './services/get-axies.service';
import { GetAxieService } from './services/get-axie.service';
import { GetAxieDto } from './dtos/get-axie.dto';

@UseGuards(JwtAuthGuard)
@Controller('axies')
export class AxiesController {
  constructor(
    private readonly getAxieService: GetAxieService,
    private readonly getAxiesService: GetAxiesService,
    private readonly importAxiesService: ImportAxiesService,
  ) {}

  @Get('/:id')
  async getAxie(@Param() dto: GetAxieDto) {
    return await this.getAxieService.run(dto);
  }

  @Get()
  async getAxies() {
    return await this.getAxiesService.run();
  }

  @Post('/import')
  async importAxies(@Body() getAxiesListDto: GetAxiesListDto) {
    return await this.importAxiesService.run(getAxiesListDto);
  }
}
