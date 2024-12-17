import { GetAxiesListDto } from '../dtos/get-axies-list.dto';

export const getAxieBriefList = (getAxiesListDto: GetAxiesListDto) => {
  const { from, sort, size, auctionType } = getAxiesListDto;

  return {
    operationName: 'GetAxieBriefList',
    variables: {
      from,
      sort,
      size,
      auctionType,
    },
    query: `query GetAxieBriefList(
                      $auctionType: AuctionType, 
                      $from: Int, 
                      $sort: SortBy, 
                      $size: Int
                    ) {
                      axies(
                        auctionType: $auctionType
                        from: $from
                        sort: $sort
                        size: $size
                      ) {
                        total 
                        results {
                          id name stage class order { currentPriceUsd }
                        }
                      }
                    }`,
  };
};
