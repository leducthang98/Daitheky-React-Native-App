import { link } from '../configs/ngrokConfig';
export default function getData(page) {
  return new Promise((resolve, reject) => {

    const url = 'https://daitheky.net/api/tinban/list?cat_id=1&page=' + page
    fetch(url, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((res) => {

        resolve(res);
        console.log(res)
      })
      .catch((error) => {
        reject(error);
      });
  });
}
