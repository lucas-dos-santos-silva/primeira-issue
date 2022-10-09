function contador(){
   var valor1 = String(document.getElementById('valor').value)
   var valor2 = valor1
  
   var res = document.getElementById('resultado')
      if(valor2 == 1234 ){
         res.innerHTML = 'sempre isso !'
      }else{
         res.innerHTML = 'anao'
      }
   console.log(valor2)
}