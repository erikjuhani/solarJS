var SoundLib = SoundLib || {};

SoundLib = function()
{
      this.audio = new (window.AudioContext || window.webkitAudioContext)();
      var destinationNode = this.audio.destination;
      this.sounds = {};
}

SoundLib.prototype.playSound = function(b) {
      var src = ac.createBufferSource();
          src.buffer = b;
          src.connect(ac.destination);
          src.start(0);
}

SoundLib.prototype.loadSound = function(url) {
      // Fetching and decoding audio from url
      var req = new XMLHttpRequest();
      req.open('GET', url, true);
      req.responseType='arraybuffer';
      req.onload=function(){
      ac.decodeAudioData(req.response,function(buffer){
        this.buffer=buffer;
        });
      };
      req.send();

}

SoundLib.loadDir = function() {

}

var Sound = function(source) {
      var loaded = false;

      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      window.ac = new AudioContext();
      window.destinationNode = window.ac.destination;

      var play = function() {
        if(loaded) {
          var sourceNode = ac.createBufferSource();
          sourceNode.buffer = bufferedSound;

          var volumeNode = ac.createGain();
          volumeNode.gain.value = 0.5;
          sourceNode.connect(volumeNode);
          volumeNode.connect(destinationNode);

          sourceNode.start(0);
        }
      };

      var bufferedSound;
      var req = new XMLHttpRequest();
      req.open('GET', source, true);
      req.responseType='arraybuffer';
      req.onload=function(){
      ac.decodeAudioData(req.response,function(buffer){
        bufferedSound=buffer;
        loaded = true;
        console.log(buffer);
        play()
      }, function(err) {
        console.error('decodeAudioData error', err);
      });
      };
      req.send();
}
