import request from '../request';
import { Error, LocationResults } from './getLocationSearch.types';


const getLocationSearch = async (numberOfRows: number,
  searchTerm: string,
): Promise<LocationResults | Error | undefined> => {
  const searchLocationURI = `&solrRows=${numberOfRows}&solrTerm=${searchTerm}`;

  return await request('GET', searchLocationURI, {})
    .then((response) => {
      return response.data as LocationResults;
    })
    .catch((error) => {
      if (error) {
        return {
          error: true,
          errorMsg: error.message,
          meta: null,
          results: null,
        } as Error;
      }
    });
};

export default getLocationSearch;