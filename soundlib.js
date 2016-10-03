var SoundLib = SoundLib || {};

SoundLib = function()
{
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      window.ac = new AudioContext();
      this.buffer = {};
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
