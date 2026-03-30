document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const content = document.querySelector('.container');
    const bg = document.getElementById('bg');
    const songText = document.getElementById('song-playing');
    const nextBtn = document.getElementById('next-btn');

    const playlist = [
        { title: "box 15 - masafumi takada", file: "storage/box 15 - masafumi takada.mp3" },
        { title: "rhinestone eyes - gorillaz", file: "storage/gorillaz - rhinestone eyes.mp3" },
        { title: "closer - nine inch nails", file: "storage/closer - nine inch nails.mp3" }
    ];
    
    let currentTrack = 0;

    const playNext = () => {
        if (currentTrack >= playlist.length) {
            currentTrack = 0;
        }

        const song = playlist[currentTrack];
        bg.src = song.file;
        songText.innerText = `now playing: ${song.title}`;
        bg.play();
        
        currentTrack++;
    };

    overlay.addEventListener('click', () => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
            content.style.display = 'flex';
            playNext(); 
        }, 1000);
    });

    nextBtn.addEventListener('click', () => {
        playNext();
    });

    bg.addEventListener('ended', playNext);
});