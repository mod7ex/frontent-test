let products = [];

let product = {
      title: "Наименование товара",

      description: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,

      price: 1039,

      link: "#",
};

let keys = Array.from({ length: 5 }, (v, k) => k + 1);

for (let key of keys) {
      let id = `${Math.random().toString()}${key}`;
      products.push({ ...product, id });
}

export default products;
