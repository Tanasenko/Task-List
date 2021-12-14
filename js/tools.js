var removeAllBtn = document.querySelector('.remove__all');
var readyAllBtn = document.querySelector('.ready__all');
var responsesList = document.querySelector('.responses__list');

function removeAll() {
    removeAllBtn.addEventListener('click', ()=>{
        responsesList.innerHTML = '';
    })
};

function readyAll() {
    readyAllBtn.addEventListener('click', ()=>{
        var status = document.querySelectorAll('.status__content');
        status.forEach(element => {
            element.classList.remove('unready');
            element.classList.add('ready');
        });

        var buttons = document.querySelectorAll('.buttons');
        var readyBtn = document.querySelectorAll('.ready__btn');
        var unreadyBtn = document.createElement('button');
        unreadyBtn.classList.add('unready__btn', 'btn');
        unreadyBtn.textContent = 'unready';    
               
        readyBtn.forEach(element => {
            element.textContent = 'unready'; 
            element.classList.remove('ready__btn');
            element.classList.add('unready__btn');
        });
    })
}

removeAll();
readyAll();