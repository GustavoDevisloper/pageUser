function adicionarImagem() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*, video/*';
  input.onchange = function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const preview = document.createElement('div');
      preview.className = 'preview';

      if (file.type.includes('image')) {
        const img = document.createElement('img');
        img.src = e.target.result;
        preview.appendChild(img);
      } else if (file.type.includes('video')) {
        const video = document.createElement('video');
        video.src = e.target.result;
        video.controls = true;
        preview.appendChild(video);
      }

      document.body.appendChild(preview);
    };

    reader.readAsDataURL(file);
  };

  input.click();
}
