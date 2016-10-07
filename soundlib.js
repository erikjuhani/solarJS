var SoundLib = SoundLib || {};

SoundLib = function()
{
      this.sounds = {};
}

SoundLib.prototype.loadSound = function(sound) {
      this.sounds[sound.name] = sound;
}

SoundLib.prototype.playSound = function(b) {
      var src = ac.createBufferSource();
          src.buffer = b;
          src.connect(ac.destination);
          src.start(0);
}

SoundLib.loadDir = function(file) {
      var reader = new FileReader();
          reader.readAsText(file);
          console.log(reader);
}

SoundLib.sound = function(name, source) {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ac = new AudioContext();
      this.name   = name;
      this.source = source;
      this.audioBuffer;
}

SoundLib.sound.prototype.play = function(volume, delay) {
      var loaded = false,
          volume = volume || 1,
          delay  = delay || 0;

      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      window.ac = new AudioContext();
      window.destinationNode = window.ac.destination;

      var play = function() {
        if(loaded) {
          var sourceNode = ac.createBufferSource();
          sourceNode.buffer = bufferedSound;

          var volumeNode = ac.createGain();
          volumeNode.gain.value = volume;
          sourceNode.connect(volumeNode);
          volumeNode.connect(destinationNode);

          sourceNode.start(delay);
        }
      };

      var bufferedSound;
      var req = new XMLHttpRequest();
      req.open('GET', this.source, true);
      req.responseType='arraybuffer';
      req.onload=function(){
      ac.decodeAudioData(req.response,function(buffer){
        bufferedSound=buffer;
        loaded = true;
        this.buffer = ac.createBufferSource(buffer, true);
        play();
      }, function(err) {
        console.error('decodeAudioData error', err);
      });
      };
      req.send();
}

SoundLib.sound.prototype.getBuffer = function() {
      var ac = this.ac,
        self = this;
      var req = new XMLHttpRequest();
      req.open('GET', self.source, true);
      req.onload = function() {
        ac.decodeAudioData(req.response, function(buffer) {
          self.audioBuffer = buffer;
          console.log(self.audioBuffer);
        });
      };
      req.send();
}
