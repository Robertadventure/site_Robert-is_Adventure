const bouton_clicker = document.getElementById("bouton_demande_de_conexion");
const dialog = document.getElementById("dialog_demande_de_conexion");
const button_conexion = document.getElementById("conexion")

bouton_clicker.addEventListener("click", function () {
    dialog.showModal();
});

fermer.addEventListener("click", function() {
    dialog.close()
});

button_conexion.addEventListener("click", function(){
    
})