import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GetAxiesListDto } from './dtos/get-axies-list.dto';
import { ImportAxiesService } from './services/import-axies.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('axies')
export class AxiesController {
  constructor(private readonly importAxiesService: ImportAxiesService) {}

  @Get()
  getHello(): string {
    return '123';
  }

  @Post('/import')
  async importAxies(@Body() getAxiesListDto: GetAxiesListDto) {
    return await this.importAxiesService.run(getAxiesListDto);
  }
}
