function loadPokemon(howMany)
{
    const xhr = new XMLHttpRequest()
    let data;
    //open a get request with the remote server URL
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit="+howMany)
    //send the Http request
    xhr.send()

    //EVENT HANDLERS

    //triggered when the response is completed
    xhr.onload = function() {
      if (xhr.status === 200) {
        //parse JSON
        data = JSON.parse(xhr.responseText);
        for (pokemon of data.results)
        {
          addToList(listItem(pokemon));
        }
      } else if (xhr.status === 404) {
        console.log("No records found");
      }
    }
}

function listenToFilter(elt_id)
{
  let filter = document.getElementById('filter');
  filter.addEventListener("keyup", (event) => {
    let term = event.target.value;
    filterList(term);
  });
}

function filterList(term)
{
  let items = document.querySelectorAll('#pokemons li');

  for(item of items)
  {
    if(item.innerText.search(term) == 0) // found something
    {
      item.classList.remove('d-none');
      item.classList.add('d-flex');
    }
    else{
      item.classList.remove('d-flex');
      item.classList.add('d-none');
    }
  }
}

function addToList(item)
{
  let list = document.getElementById('pokemons')
  list.appendChild(item)
}

function listItem(pokemon)
{
  let item = document.createElement('li');
  item.classList.add('list-group-item');
  item.classList.add('d-flex');
  item.classList.add('justify-content-between');
  item.classList.add('align-items-center');
  item.textContent = pokemon.name;

  let button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('data-url', pokemon.url);
  button.classList.add('btn');
  button.classList.add('btn-outline-info');
  button.innerText = 'more';
  button.addEventListener('click', (event) => {
    let url = event.target.getAttribute('data-url');
    showPokemon(url);
  });

  item.appendChild(button);
  return item;
}

function showPokemon(url)
{
  const xhr = new XMLHttpRequest()
  let data;
  //open a get request with the remote server URL
  xhr.open("GET", url)
  //send the Http request
  xhr.send()

  //EVENT HANDLERS

  //triggered when the response is completed
  xhr.onload = function() {
    if (xhr.status === 200) {
      //parse JSON
      let pokemon = JSON.parse(xhr.responseText);

      modalFor(pokemon);

    } else if (xhr.status === 404) {
      console.log("No records found");
    }
  }
}

function modalFor(pokemon)
{
  let modal = document.getElementById('pokemon');

  modal.querySelector('img').setAttribute('src', pokemon.sprites.other['official-artwork'].front_default);
  modal.querySelector('h5').innerText = pokemon.name;
  modal.querySelector('.height strong').innerText = pokemon.height;
  modal.querySelector('.weight strong').innerText = pokemon.weight;
  modal.classList.remove('d-none');
  modal.classList.add('d-flex');
  modal.querySelector('#close').addEventListener('click', (event) => {
    // let modal = document.getElementById('pokemon');
    modal.classList.add('d-none');
    modal.classList.remove('d-flex');
  });
}
