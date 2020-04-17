import axios from 'axios';

export default axios.create({
  baseURL: 'http://ee26dd3a.ngrok.io', // need to be updated every 8 hours when i launch the tunnel
});
