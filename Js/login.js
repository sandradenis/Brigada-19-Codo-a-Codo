const { createApp } = Vue  //creo un objeto VUE llamdo createApp
 createApp({
   data() {  // define los datos de VUE
     return {
       url: 'https://hernanbula.pythonanywhere.com/usuarios',
       datos: [],
       usuario:"admin@admin.com",   //admin@admin.com
       clave:"admin"  //admin
       }
   },
   methods: {  // define los métodos o funciones
     fetchData(url) {
       fetch(url)
         .then(response => response.json())
         .then(data => {
           //console.log(data)
           this.datos=data
        })
         .catch(error=>alert("Ups... se produjo un error: "+ error))
     },
     validar(){
      
       arreglo=this.datos.filter(x => x.email==this.usuario);  // array
        console.log(arreglo)
        if (arreglo[0].clave == this.clave){      
            sessionStorage.setItem("login","true") 
            window.location.href = "login.html";  // recarga index.html
        }else{
          alert("Usuario o Password erronea")
        }
       
 
     }
    
        
   },
   created() {  // llama a los métodos que se tienen que ejecutar al inicio
     this.fetchData(this.url)                                                      
   }
    // define los métodos que se van a ejecutar cada vez que cambien los datos
 }).mount('#app')