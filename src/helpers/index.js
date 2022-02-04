let products = [];

/*
// data for testing
*/

let product = {
      title: "Наименование товара",

      description: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,

      link: "#",
};

let keys = Array.from({ length: 4 }, (v, k) => k + 1);

for (let key of keys) {
      let id = `${Math.random().toString()}${key}`;
      products.push({ ...product, id, price: 100 - key });
}

export default products;

export const urlRegex =
      /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/;

export const validLengh = (str) => {
      return str.length > 5;
};

export const compareMin = (a, b) => {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
};

export const compareMax = (a, b) => {
      if (a.price < b.price) return 1;
      if (a.price > b.price) return -1;
      return 0;
};

export const compareName = (a, b) => {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      return 0;
};

let localStorage = window.localStorage;

export const storeLocally = (list) => {
      localStorage.setItem("products", JSON.stringify(list));
};

export const fetchProducts = () => {
      let products = localStorage.getItem("products");

      if (!products) return [];

      return JSON.parse(products);
};
