document.getElementById('clickMeBtn').addEventListener('click', function() {
    document.getElementById('dynamicText').textContent = 'Very good. You deserve some milkies!';
    var img = document.getElementById('myImage');
    img.src = '1687528050794.jpeg'; // Use the correct path to your image
    img.style.display = 'block'; // This will make the image visible
});
