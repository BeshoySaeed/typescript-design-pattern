// bridge design pattern is a structural design pattern that lets you separate the abstraction from its implementation, so that the two can vary independently.
// it's work with composition of classes not inheritance

// let's make an example of audio and video player for windows and macos
// without the pattern if we want to play the video we will initiate the class for windows or macos and then call the play method
// with bridge we will separate the implementation and pass the specific class to the windows video player or macos video player

interface IPlayer {
  playVideo(): void;
  playAudio(): void;
}

interface IMediaPlayer {
  mediaPlayer(): void;
}

class WindowsPlayer implements IPlayer {
  playVideo(): void {
    console.log("play video on windows");
  }
  playAudio(): void {
    console.log("play audio on windows");
  }
}

class MacosPlayer implements IPlayer {
  playVideo(): void {
    console.log("play video on macos");
  }
  playAudio(): void {
    console.log("play audio on macos");
  }
}

abstract class AbstractVideoPlayer implements IMediaPlayer {
  constructor(protected player: IPlayer) {}

  abstract mediaPlayer(): void;
}

class VideoPlayer extends AbstractVideoPlayer {
  mediaPlayer(): void {
    this.player.playVideo();
  }
}

class AudioPlayer extends AbstractVideoPlayer {
  mediaPlayer(): void {
    this.player.playAudio();
  }
}

const windowsPlayer = new WindowsPlayer();
const macosPlayer = new MacosPlayer();

const video = new VideoPlayer(windowsPlayer);
video.mediaPlayer();

const audio = new AudioPlayer(macosPlayer);
audio.mediaPlayer();
