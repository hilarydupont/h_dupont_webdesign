
window.onload = function() {
      var video = document.getElementById('video');
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
        var mask = document.getElementById('mask');

          var images = [
            'assets/selfie1.png',
            'assets/selfie2.png',
            'assets/selfie3.png',
            'assets/selfie4.png',
            'assets/selfie6.png',
            'assets/selfie7.png',
            'assets/selfie8.png',
            'assets/selfie9.png',
            'assets/selfie10.png',
            'assets/selfie11.png',
            'assets/selfie12.png',
            'assets/selfie13.png',
            'assets/selfie14.png',
            'assets/selfie15.png'
            
          ];

          var getRandomImage = function () {
          return images[Math.floor(Math.random() * images.length)];
          };

          var image = getRandomImage();
          console.log(image);

          document.getElementById('mask').src = image;

      var tracker = new tracking.ObjectTracker('face');
      tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);
      tracking.track('#video', tracker, { camera: true });
      tracker.on('track', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        event.data.forEach(function(rect) {
          context.strokeStyle = 'transparent';
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          context.font = '11px Helvetica';
          context.fillStyle = "#fff";
          context.drawImage(mask, rect.x, rect.y, rect.width, rect.height);

          
          
        });
      });
      var gui = new dat.GUI();
      gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
      gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
      gui.add(tracker, 'stepSize', 1, 5).step(0.1);
    };

    function myFunction() {
    location.reload();
}