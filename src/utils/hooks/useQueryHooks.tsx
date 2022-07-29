import { useQuery } from "react-query"
import { filterByYear, getAllWines } from "../api/fetchServices";

export const useGetWines = (filter: boolean, filters?: any) => { 
    if(filter) {
        return useQuery(["wines", filters], () => filterByYear(filters))
    } else {

        return useQuery(["wines"], getAllWines);
    }
}