// fazer botão escutar evento de click e chamar fetchData


document.getElementById("fetchButton").addEventListener('click', fetchData); // O evento espeficicado deve ser uma string


 function fetchData() {

    const url = 'https://jsonplaceholder.typicode.com/posts'; // URL da API pública

    if (self.fetch) {
        console.log("fetch disponível")
    }else{
        console.log('nao disponivel')
    }

    // fazer o fetch da url, fazendo com informações sejam disponibilizadas e também tratando erros
    fetch(url)
        .then(response => {
            console.log('entrou no then')
            if (!response.ok) {
                throw new Error('network response was not ok' + response.statusText)
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('there has been a problem with your fetch operation', error);
        });
    
}

function displayData(data) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('result-item');
        div.innerHTML = 
})
    // acessa div de resultados

    // itera sobre os dados em data e preenche a div do html
}


 /* async function fetchData() {
    try {
        const response = await fetch('https://api.exemplo.com/dados');
        if (!response.ok) {
            throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        console.log(data);
        // Aqui você pode manipular os dados como quiser
    } catch (error) {
        console.error('Erro:', error);
    }
}
    const url = 'https://jsonplaceholder.typicode.com/posts'; // URL da API pública */


   /* async function fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }
            const data = await response.json();
            console.log(data);
            // Aqui você pode manipular os dados como quiser
        } catch (error) {
            console.error('Erro:', error);
        }
    }
    document.addEventListener('DOMContentLoaded', (event) => {
        const button = document.getElementById('fetchButton');
        button.addEventListener('click', fetchData);
    });
    
    function displayData(data) {
        // acessa div de resultados
    
        // itera sobre os dados em data e preenche a div do html
    } */

    
    
    
    
    
    