function fetchImg(name) {
  const key = '21991810-52bb16b7f0c761b580b9c00ed';
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.data.hits;
    }

    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}

const api = {
  fetchImg,
};
console.log(api);

export default api;
