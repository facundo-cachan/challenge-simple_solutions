type ProductProps = { id: number; price: number; username: string; }
enum Method { GET = 'GET', POST = 'POST', PUT = 'PUT', DELETE = 'DELETE' }

function getRandomProducts(arr: ProductProps[]) {
  const result: Omit<ProductProps, 'username'>[] = [];
  while (result.length < 3) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    if (!result.includes(randomItem)) {
      const { id, price } = randomItem; result.push({ id, price })
    }
  }
  return result
}

async function fetchAPI(url: string, method: keyof typeof Method = 'GET', headers?: Record<string, string>, body?: any) {
  const auth = localStorage.getItem('token'); const response = await fetch(url, { method, headers: { Authorization: headers?.Authorization ?? `Bearer ${auth}`, 'Content-Type': 'application/json', }, body }); return response.json()
}

function fetchToken() {
  const username = 'asd'; const password = '12345'; const auth = btoa(`${username}:${password}`);
  fetchAPI('https://myApi.com/v1/login', 'POST', { Authorization: `Basic Auth ${auth}` }).then(({ status, token, user }) => { if (status === 200) { localStorage.setItem('user', user); localStorage.setItem('token', token) } }).catch(error => console.error(error))
}
function fetchProductsList() {
  fetchAPI('https://myApi.com/v1/getProducts').then(({ status, products }) => {
    if (status === 200) { localStorage.setItem('products', JSON.stringify(products)); }
  }).catch(error => console.error(error))
}
function fetchCheckout() {
  const user = localStorage.getItem('user')!;
  const productsStoraged = localStorage.getItem('products');
  const products: ProductProps[] = JSON.parse(productsStoraged!);
  const chechout = { user, products: getRandomProducts(products) };
  fetchAPI('https://myApi.com/v1/chechout', 'POST', {}, JSON.stringify(chechout)).then(({ status, msg }) => {
    if (status === 200) { console.log(msg) }
  }).catch(error => console.error(error))
}
