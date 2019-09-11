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

const hidehotel = document.querySelector('#hide')
hidehotel.addEventListener('change',function(e){
    if(hidehotel.checked){
        list.style.display="none";
    }else{
        list.style.display="initial";
    }
});

const addForm = document.forms['add-Hotel'];

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const hotelName=document.createElement('span');
    const deleteBtn = document.createElement('span');

    deleteBtn.textContent = "delete";
    hotelName.textContent = value;

    hotelName.classList.add('name');
    deleteBtn.classList.add('delete');

    li.appendChild(hotelName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});

list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})