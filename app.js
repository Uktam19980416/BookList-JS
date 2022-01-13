window.addEventListener('DOMContentLoaded', () => {
    let title = document.querySelector('#title'),
        author = document.querySelector('#author'),
        year = document.querySelector('#year'),
        bookList = document.querySelector('#book-list'),
        btn = document.querySelector('.btn');

    btn.addEventListener('click', (event) => {
        event.preventDefault();   
        if (title.value == '' && author.value == '' && year.value == '') {
            alert('Please fill in all inputs');
        } else {
            const mainRow = document.createElement('tr');

            const titleRow = document.createElement('th');
            titleRow.innerHTML = title.value;
            mainRow.appendChild(titleRow);

            const authorRow = document.createElement('th');
            authorRow.innerHTML = author.value;
            mainRow.appendChild(authorRow);

            const yearRow = document.createElement('th');
            yearRow.innerHTML = year.value;
            mainRow.appendChild(yearRow);
            
            bookList.appendChild(mainRow);

            title.value = ''
            author.value = ''
            year.value = ''
        }
    })
})