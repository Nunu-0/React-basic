import axios from 'axios';

class Youtube {
    constructor(key) {
      this.client = axios.create({
        baseURL:'https://www.googleapis.com/youtube/v3',
        parmas: {key: key},
      }); 
    }
    async mostPopular() {
      const response = await this.client.get('videos',{
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
        }
      })
      return response.data.items;
    }
    async search(query) {
      const response = await this.client.get('search',{
        params: {
          part: 'snippet',
          maxResults: 25,
          p: query,
          type: 'video',
        }
      })
      return response.data.items;
  }
  export default Youtube;