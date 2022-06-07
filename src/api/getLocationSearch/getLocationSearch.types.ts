export interface Error {
  meta: null;
  results: null;
  error: boolean;
  errorMsg: string | null;
}

export interface Doc {
  country?: string;
  lng?: number;
  city?: string;
  searchType?: string;
  alternative?: string[];
  index: number;
  bookingId?: string;
  placeType?: string;
  placeKey?: string;
  iata?: string;
  countryIso?: string;
  locationId: string;
  name: string;
  ufi?: number;
  isPopular?: boolean;
  region?: string;
  lang?: string;
  lat: number;
}

interface Results {
  isGooglePowered: boolean;
  docs: Doc[];
  numFound: number;
}

export interface LocationResults {
  results: Results;
}
