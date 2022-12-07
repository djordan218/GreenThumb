import axios from 'axios';

// NODE_ENV = 'development'
// NODE_ENV = 'production'

const BASE_API_URL = 'http://localhost:3001';

const BASE_URL = process.env.REACT_APP_BASE_URL || BASE_API_URL;

class API {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = 'get') {
    console.debug('API Call:', endpoint, data, method);
    const url = `${BASE_API_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${API.token}` };
    const params = method === 'get' ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // sign up and send to authenticate
  static async signup(user) {
    let res = await this.request(`auth/register`, user, 'post');
    console.log('completed signing up');
    return res.token;
  }

  // user log in, sends back token
  static async login(user) {
    let res = await this.request(`auth/token`, user, 'post');
    return res.token;
  }

  // get all crops
  static async getCrops(name) {
    const result = await this.request(`crops`, { name });
    return result.crops;
  }

  // get a single crop
  static async getCropById(id) {
    const result = await this.request(`crops/${id}`);
    return result.crop;
  }

  // get a user's saved crops
  static async getUserCropsById(id) {
    const result = await this.request(`users/${id}/crops`);
    return result.crops;
  }

  // get the current user
  static async getCurrentUser(username, token) {
    let result = await this.request(`users/${username}`);
    return result.user;
  }

  // user update profile via patch request
  static async updateProfile(username, data) {
    let res = await this.request(`users/${username}`, data, 'patch');
    return res.user;
  }

  // adding crop to the DB
  static async addCropToDB(userId, data) {
    console.log('adding crop to database...');
    let res = await this.request(`users/crops/add`, { userId, data }, 'post');
    return res;
  }

  // editing crop in DB, user must send all data
  static async editCropInDB(userId, cropId, data) {
    console.log('editing crop in database...');
    let res = await this.request(
      `users/crops/edit/${cropId}`,
      { userId, cropId, data },
      'patch'
    );
    return res;
  }

  // delete crop from the DB, user must pass an "are you sure" check
  // can only be done by user who created or admin
  static async deleteCropFromDB(cropId, data) {
    console.log(`deleting crop with id of ${cropId} from database...`);
    let res = await this.request(`users/crops/delete/${cropId}`, data, 'post');
    return res;
  }

  // user adding a crop to their garden/dashboard
  static async addCropToGarden(userId, cropId) {
    let res = await this.request(
      `users/${userId}/crops/${cropId}`,
      { userId, cropId },
      'post'
    );
    return res;
  }

  // user removing a single crop from their garden
  static async removeUserCropFromGarden(userId, cropId) {
    let res = await this.request(
      `users/${userId}/crops/${cropId}/remove`,
      { userId, cropId },
      'post'
    );
    return res;
  }
}

export default API;
