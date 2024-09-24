console.log('Olá mundo!');
let novoElemento = document.createElement('h1');
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
let elementoBody = document.body;
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'pink';
novoElemento.style.color = 'white';
novoElemento.style.textAlign = 'center';
novoElemento.style.padding = '20px'; 
