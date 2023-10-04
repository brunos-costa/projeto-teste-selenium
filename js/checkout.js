// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    
    form.addEventListener('submit', event => {
      
      console.log(form.checkValidity())
      if (!form.checkValidity()) {
        event.preventDefault()        
        event.stopPropagation()

        localStorage.setItem("info", "Formulário com erros")
      }
      else{

        localStorage.setItem("info", "Formulário enviado com sucesso")
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

let campoCupom = document.querySelector("#campoCupom")
document.querySelector("#btnCupom").addEventListener("click",(evento)=>{
  if(campoCupom.value == ""){
    evento.preventDefault()

    alert("Informe um cupom válido")
  }
  else{
    confirm("Deseja aplicar esse cupom?")

  }

})

