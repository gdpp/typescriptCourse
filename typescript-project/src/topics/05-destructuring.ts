interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "The Remedy",
    details: {
        author: 'Puscifer',
        year: 2015
    }
}

const {song, songDuration: duration, details} = audioPlayer;
const {author} = details;

console.log(song)
console.log(duration)
console.log(author)


const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log(trunks);

export {}