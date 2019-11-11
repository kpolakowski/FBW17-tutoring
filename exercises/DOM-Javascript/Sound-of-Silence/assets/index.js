const formatDate = (date) => {
    return new Date(date).toISOString().slice(0,10);
}

const renderTracks = (tracks)=> {
    document.querySelector("main").innerHTML = "";
    tracks.forEach((track,i) => {
        //const { trackName,artistName,artworkUrl100,releaseDate,trackPrice,currency, wrapperType } = track;
        const trackEl = document.createElement("div");
        //<div></div>
        trackEl.classList.add(track.wrapperType);
        //<div class="track"></div>

        trackEl.innerHTML = `
            <img src="${track.artworkUrl100}"/>
            <div cla>
                <p class="title">${track.trackName}</p>
                <p class="artist">${track.artistName}</p>
                <p class="releaseDate">${formatDate(track.releaseDate)}</p>
                <p class="price">${track.trackPrice} ${track.currency}</p>
            </div>
        `

        document.querySelector("main").appendChild(trackEl);
    })
}


document.querySelector("#search").addEventListener("keyup",(e)=> {
    const keyword = e.target.value.toLocaleLowerCase();

    const filteredMusic = music.filter(
        track=>track.artistName.toLocaleLowerCase().includes(keyword) 
        || track.trackName.toLocaleLowerCase().includes(keyword))

    if(filteredMusic.length===0){
        document.querySelector("main").innerHTML = "<p>No tracks were found</p>";
        return;
    }

    renderTracks(filteredMusic);
})

renderTracks(music);