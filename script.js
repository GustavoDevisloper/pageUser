function adicionarImagem() {
    var input = document.createElement('input');
    input.type = 'file';
  
    input.onchange = function(e) {
      var file = e.target.files[0];
  
      if (file && file.type.startsWith('image/')) {
        var reader = new FileReader();
  
        reader.onload = function(e) {
          var url = e.target.result;
  
          var imagem = document.createElement('img');
          imagem.src = url;
  
          var quadrado = document.querySelector('.quadrado');
          quadrado.innerHTML = '';
          quadrado.appendChild(imagem);
        };
  
        reader.readAsDataURL(file);
      }
    };
  
    input.click();
}
  