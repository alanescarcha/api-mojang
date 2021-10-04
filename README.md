# API MOJANG

Created to obtain the most important data of a user from Mojang APIs. All in one.

## Dependencies

- axios (https://www.npmjs.com/package/axios)
- express (https://www.npmjs.com/package/express)

## Usage

```javascript
const axios = require('axios');

async function getData(username) {
    try {
        const response = await axios.get(`https://api-mojang.herokuapp.com/mojang/v1/${username}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

getData('YourUsername');
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
