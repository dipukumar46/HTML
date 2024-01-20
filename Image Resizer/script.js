let cropper;
let canvas;

document.getElementById('inputImage').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('image').src = event.target.result;
            if (cropper !== undefined) {
                cropper.destroy();
            }
            const imageElement = document.getElementById('image');
            cropper = new Cropper(imageElement);
        }
        reader.readAsDataURL(file);
    }
});

function resizeImage() {
    const width = parseInt(document.getElementById('resizeWidth').value);
    const height = parseInt(document.getElementById('resizeHeight').value);

    canvas = cropper.getCroppedCanvas({
        width: width,
        height: height
    });

    if (canvas) {
        document.getElementById('downloadLink').href = canvas.toDataURL('image/jpeg');
    }
}
