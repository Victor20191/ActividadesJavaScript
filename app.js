menu=null;

do{
    menu=parseInt(prompt("A continuación, elige el area con la cual te queires comunicar: \n 1. Sistemas \n 2. Contabilidad \n 3. Mercadeo \n 4. Ventas"));

        if(menu==1){
            alert("Acabas de ingresar al area de sistemas")   

        }else if (menu==2){
            alert("Acabas de ingresar al area de Contabilidad")   
            
        }else if (menu==3){
            alert("Acabas de ingresar al area de Mercadeo")   

        }else if (menu==4){
            alert("Acabas de ingresar al area de Ventas")   
        }else{
            alert("Escoge una opción correcta.")
    }
}while (isNaN(menu)| menu>4)