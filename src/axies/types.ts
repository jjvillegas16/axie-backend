import { Axie, AxieClass } from './schemas/axie.schema';

export type Sort = 'PriceAsc' | 'PriceDesc' | 'IdAsc' | 'IdDesc' | 'Latest';
export type AuctionType = 'All' | 'Sale' | 'NotForSale';

export type AxieOrder = {
  currentPriceUsd: string;
};

export type AxieResponse = Omit<Axie, 'currentPriceUsd' | 'axieClass'> & {
  class: AxieClass;
  order: AxieOrder;
};

export type GetAxieBriefListResponse = {
  data: { axies: { total: number; results: AxieResponse[] } };
};
