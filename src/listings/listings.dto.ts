export class CreateListingDto {
  auction_reserve: number;
  auction_end: string;
}

export class ListingDto {
  id: string;
  auction_reserve: number;
  auction_end: string;
}
