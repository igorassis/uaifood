const API_KEY = '77576b2dae845bf32c1de0795a7753e1';

export class connect {
    static getHeaders() {
        return yHeaders;
      }
}

const yHeaders = {
    headers: {
      'user-key': API_KEY
    }
  };

export const DOMAIN = 'https://developers.zomato.com/api/v2.1/';
export const SEARCHBYCITY = DOMAIN + 'cities?q=';
export const RESTAURANTLIST = DOMAIN + 'establishments?city_id=';
export const RESTAURANTDETAILS = DOMAIN + 'restaurant?res_id=';