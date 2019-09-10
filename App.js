const list = document.querySelector('#Hotel-list ul');


const searchBar = document.forms['search-Hotels'].querySelector('input')
searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const hotels = list.getElementsByTagName('li');
    Array.from(hotels).forEach(function(hotel){
        const title = hotel.firstElementChild.textContent ;
        if(title.toLowerCase().indexOf(term) != -1){
            hotel.style.display='block';
        }else{
            hotel.style.display='none';
        }
    })
});