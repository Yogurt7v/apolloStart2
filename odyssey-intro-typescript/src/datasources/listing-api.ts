import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing } from "../types";

export class ListingAPI extends RESTDataSource {
    baseUrl: "https://rt-airlock-services-listing.herokuapp.com/"


    getFeaturedListings(): Promise<Listing[]> {
        return this.get<Listing[]>("featured-listings");
    }
}
