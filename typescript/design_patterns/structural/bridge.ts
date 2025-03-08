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

// database example

interface IDatabase {
  connect(): void;
  query(sql: string): void;
  close(): void;
}

class PostgreSQLDatabase implements IDatabase {
  connect(): void {
    console.log("connect to postgresql database");
  }

  query(sql: string): void {
    console.log("query postgresql database, queries", sql);
  }

  close(): void {
    console.log("close postgresql database");
  }
}

class MongoDBDatabase implements IDatabase {
  connect(): void {
    console.log("connect to mongodb database");
  }

  query(sql: string): void {
    console.log("query mongodb database, queries", sql);
  }

  close(): void {
    console.log("close mongodb database");
  }
}

// abstract layer

abstract class DBAbstract {
  constructor(protected database: IDatabase) {}
  abstract fetchData(query: string): void;
}

class DB extends DBAbstract {
  fetchData(query: string): void {
    this.database.connect();
    this.database.query(query);
    this.database.close();
  }
}

const db = new DB(new PostgreSQLDatabase());
db.fetchData("select * from users");
