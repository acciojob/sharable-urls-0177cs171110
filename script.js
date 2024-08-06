// your code here
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('urlForm');
    const nameInput = document.getElementById('name');
    const yearInput = document.getElementById('year');
    const button = document.getElementById('button');
    const urlDisplay = document.getElementById('url');

    button.addEventListener('click', () => {
        const name = nameInput.value;
        const year = yearInput.value;
        let url = 'https://localhost:8080/';

        const params = new URLSearchParams();

        if (name) {
            params.append('name', name);
        }

        if (year) {
            params.append('year', year);
        }

        if (params.toString()) {
            url += '?' + params.toString();
        }

        urlDisplay.textContent = url;
    });
});
