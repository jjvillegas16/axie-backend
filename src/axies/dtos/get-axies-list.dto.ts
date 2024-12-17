import { IsNumber, IsOptional, IsString } from 'class-validator';
import { AuctionType, Sort } from '../types';

export class GetAxiesListDto {
  @IsNumber()
  @IsOptional()
  from: number = 0;

  @IsNumber()
  @IsOptional()
  size: number = 300;

  @IsString()
  @IsOptional()
  sort: Sort = 'PriceAsc';

  @IsString()
  @IsOptional()
  auctionType: AuctionType = 'All';
}
