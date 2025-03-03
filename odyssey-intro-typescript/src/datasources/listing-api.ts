import { RESTDataSource } from "@apollo/datasource-rest";

export class ListingAPI extends RESTDataSource {
    baseUrl: "https://rt-airlock-services-listing.herokuapp.com/"


    getFeaturedListings() {
        return this.get<any[]>("featured-listings");
    }
}
