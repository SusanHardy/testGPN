--- api.js

export function getPosts() {
  return axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=44285ff0');
}