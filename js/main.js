import arts from './model/dataset.js';

function loadGallery() {
  arts.sort((a,b)=>{return a.name < b.name ? -1 : a.name > b.name ? 1 : 0}).map((art, index)=>{
    return creatArtCards(art, index)
  })
}

function creatArtCards(art, index) {
  const artsCardsView = `
        <a data-toggle="modal" href="#myModal${art.id}"
          <div id="art-${art.id}">
            <div class="card">
              <div class="card-body p-0">
                <img src="${art.image}" alt="${art.name}" class="image w-100">
              </div>
              <div class="card-img-overlay overlay">
                <p class="title">${art.name}</p>
                <p class="author">${art.author}</p>
              </div>
            </div>
          </div>
        </a>

        <div class="modal fade" id="myModal${art.id}" tabindex="-1" role="dialog" aria-labelledby="myModal" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${art.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <img src="${art.image}" alt="${art.name}" class="w-100"/>
              </div>
              <div class="modal-footer">
                <p>${art.description}</p>
                </br>
                <p>${art.author}.</p>
              </div>
            </div>
          </div>
        </div>
      `;

  const col1 = document.querySelector('.col1');
  const col2 = document.querySelector('.col2');
  const col3 = document.querySelector('.col3');
  const col4 = document.querySelector('.col4');
  if(index%4 === 0){
    col1.insertAdjacentHTML('beforeend', artsCardsView);
  }
  if(index%4 === 1){
    col2.insertAdjacentHTML('beforeend', artsCardsView);
  }
  if(index%4 === 2){
    col3.insertAdjacentHTML('beforeend', artsCardsView);
  }
  if(index%4 === 3){
    col4.insertAdjacentHTML('beforeend', artsCardsView);
  }
}


loadGallery();