import {link} from '../configs/ngrokConfig';
export default function getData() {
    return new Promise((resolve, reject) => {
      
      const url = link+'/sellDatabase'
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
  