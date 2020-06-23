import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 73rhb_rR0hbs_SONe3LGFbvVHrhD_W2FL7KPL0XTG1Q",
      }
});