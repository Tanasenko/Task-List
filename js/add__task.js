var input = document.querySelector('.task__input');
var addBtn = document.querySelector('.add__btn');
var responsesList = document.querySelector('.responses__list');


function addTask() {
    addBtn.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            var itemText = document.createElement('span');
            itemText.classList.add('item__text');
            itemText.textContent = input.value;
            input.value = '';

            var readyBtn = document.createElement('button');
            readyBtn.classList.add('ready__btn', 'btn');
            readyBtn.textContent = 'ready';
            var deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete__btn', 'btn');
            deleteBtn.textContent = 'delete';

            var buttons = document.createElement('div');
            buttons.classList.add('buttons');
            buttons.append(readyBtn);
            buttons.append(deleteBtn);

            var itemContent = document.createElement('div');
            itemContent.classList.add('item__content');
            itemContent.append(itemText);
            itemContent.append(buttons);

            var statusContent = document.createElement('div');
            statusContent.classList.add('status__content', 'unready');

            var itemStatus = document.createElement('div');
            itemStatus.classList.add('item__status');
            itemStatus.append(statusContent);

            var responceItem = document.createElement('li');
            responceItem.classList.add('responce__item');
            responceItem.append(itemContent);
            responceItem.append(itemStatus);

            responsesList.append(responceItem);
        };

        deleteBtn.addEventListener('click', ()=>{
            responceItem.remove();
        });

        readyBtn.addEventListener('click', ()=>{
            if (readyBtn.textContent == 'ready') {
                statusContent.classList.remove('unready');
                statusContent.classList.add('ready');
                var unreadyBtn = document.createElement('button');
                unreadyBtn.classList.add('unready__btn', 'btn');
                unreadyBtn.textContent = 'unready';
                buttons.replaceChild(unreadyBtn, readyBtn);
            
                unreadyBtn.addEventListener('click', ()=>{
                    buttons.replaceChild(readyBtn, unreadyBtn)
                    statusContent.classList.remove('ready');
                    statusContent.classList.add('unready');
                    readyBtn.textContent = 'ready';
                })
            } else if (readyBtn.textContent == 'unready') {
                statusContent.classList.remove('ready');
                statusContent.classList.add('unready');
                var unreadyBtn = document.createElement('button');
                unreadyBtn.classList.add('ready__btn', 'btn');
                unreadyBtn.textContent = 'ready';
                buttons.replaceChild(unreadyBtn, readyBtn);

                unreadyBtn.addEventListener('click', ()=>{
                    buttons.replaceChild(readyBtn, unreadyBtn)
                    statusContent.classList.remove('ready');
                    statusContent.classList.add('unready');
                    readyBtn.textContent = 'ready';
                })
            }
            
            
        })
    })

};

addTask();