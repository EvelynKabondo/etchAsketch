const container =document.getElementById('container');
for (let i =0; i <256; i++) {
    const newdiv =document.createElement('div');
    container.appendChild(newdiv);
}
console.log(container);