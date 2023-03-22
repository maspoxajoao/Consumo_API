const timestamp = new Date().getTime();
const publicKey = "e8c91fe61ec10b507d210a6e7da3290c";
const privateKey = "94351535c42264a927baea50791bea48d08c99a9";
const hash = timestamp + privateKey + publicKey;
const hashMd5 = MD5.generate(hash);

const promise = fetch(
  `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`
);

promise.then(response => {
  console.log(response)
  let content = document.getElementById('content')

  response.json().then(res => {
      console.log(res)
      res.data.results.forEach(hero => {
          content.innerHTML = content.innerHTML + `<div class="box">
              <h1> ${hero.name}</h1>
              <img class="imagem" src="${hero.thumbnail.path}.${hero.thumbnail.extension}">
  
              <ul>
              <p>Revistas</p>
              <li>${hero.comics.items[0].name}</li>
              <li>${hero.comics.items[1].name}</li>
              </ul>
              <ul>
              <p>Séries</p>
              <li>${hero.comics.items[0].name}</li>
              <li>${hero.comics.items[1].name}</li>
              </ul>
          </div>`

      })

  })
})


//  .cath(error => {
// console.log('Erro: ' + error)
//})
