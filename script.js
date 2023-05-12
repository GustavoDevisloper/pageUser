function adicionarImagem() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*, video/*';
  input.onchange = function(event) {
    const file = event.target.files[0];

    if (file.type.includes('image')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = 200;
          canvas.height = 200;
          ctx.drawImage(img, 0, 0, 200, 200);

          const preview = document.createElement('div');
          preview.className = 'preview';
          preview.style.backgroundImage = `url(${canvas.toDataURL()})`;

          const quadrado = document.querySelector('.quadrado');
          quadrado.innerHTML = '';
          quadrado.appendChild(preview);
        };
      };

      reader.readAsDataURL(file);
    } else if (file.type.includes('video')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const video = document.createElement('video');
        video.src = e.target.result;
        video.controls = true;
        video.className = 'preview';

        const quadrado = document.querySelector('.quadrado');
        quadrado.innerHTML = '';
        quadrado.appendChild(video);
      };

      reader.readAsDataURL(file);
    }
  };

  input.click();
}
