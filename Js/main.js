
let cabecera = `
<div class="headerlogo">
    <a href="./index.html">
        <img class="Logo" src="./IMAGENES/LOGO GIF.gif" alt="Logo">
      </a>
</div>
    

    <nav>
      <a class="anav" href="./Comprar.html">Comprar</a>
      <a class="anav" href="./Novedades.html">Novedades</a>
      <a class="anav" href="./Contacto.html">Contacto</a>
    </nav>

    <div class="aheader">
      <h1>Bienvenidos a Brigada - 19</h1>
      <br>
      <h2>Festivales Musicales Para Todos</h2>
    </div>`
document.querySelector("#encabezado").innerHTML = cabecera


let pie = `    <nav>
<a href="https://api.whatsapp.com/send?phone=1170042373">
  <img class="afooter" src="./IMAGENES/whatsapp.png" alt="Logo whatsapp">
</a>
<a href="https://www.facebook.com">
  <img class="afooter" src="./IMAGENES/facebook.png" alt="Logo facebook">
</a>
<a href="mail.to:sandradenis24@gmail.com">
  <img class="afooter" src="./IMAGENES/gmail.png" alt="Logo email">
</a>
</nav>
<p>Codo a Codo - Desarrollado por Exequiel Arce y Sandra Denis</p>`
document.querySelector("#footpie").innerHTML = pie

