
let cad1 = ` 
<h2 class="titulo">Listado de los Próximos Eventos</h2>
<br><br>
<div class="containerFiltro">
      <h3>Para la búsqueda ingrese el país</h3>
      <br>
      <label for="">País</label>
      <input type="text" v-model="Pais" name="Pais" id="Pais" placeholder="Escriba ...">
                     
      </input>

        
<div class="containerNovedades">
`
for (let elemento of data) {
    cad1 = cad1 + `
     
        <div class="card">
        <img src= ${elemento.Foto}>
        <div class="card-img">
            <h2> ${elemento.Artista}</h2>
            <h3> ${elemento.Fecha}</h2>
            <ul> 
                <li>${elemento.Lugar}</li>
                <li>${elemento.Ciudad}</li>
                <li>${elemento.País}</li>    
            </ul>
        </div>
       </div>        `
}
cad1 = cad1 + `</div>`
document.querySelector("section").innerHTML = cad1

document.addEventListener('keyup', e => {
    if (e.target.matches(`#Pais`)) {
        document.querySelectorAll(`.card`).forEach(elemento => {
            elemento.textContent.toLocaleLowerCase().includes(e.target.value)
                ? elemento.classList.remove(`filtro`)
                : elemento.classList.add(`filtro`);
        })

    }
}
)
