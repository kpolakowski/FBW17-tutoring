const formatDate = (date) => {
    return new Date(date).toISOString().slice(0,10);
}

//DEFAULT FILTER
const filter = {
    keyword:"",
    sortProp:"trackPrice",
    asc:false
}

const renderTracks = (tracks)=> {
    //FILTERING
    if(filter.keyword){
        tracks = tracks.filter(
        track=>track.artistName.toLocaleLowerCase().includes(filter.keyword) 
        || track.trackName.toLocaleLowerCase().includes(filter.keyword))
    }

    //SORTING
    if(filter.sortProp === "price"){
        tracks = tracks.sort((trackA,trackB)=>{
            if(filter.asc){
                return trackA.trackPrice - trackB.trackPrice;
            }
            return trackB.trackPrice - trackA.trackPrice;
        });
    } else {
        tracks = tracks.sort((trackA,trackB)=>{
            if(trackA[filter.sortProp]<trackB[filter.sortProp]){
                return filter.asc ? -1 : 1;
            } else if(trackA[filter.sortProp]>trackB[filter.sortProp]){
                return filter.asc ? 1 : -1;
            } else {
                return 0;
            }
        });
    }

    const body = document.querySelector("tbody");
    body.innerHTML = ""
    tracks.forEach((track,i) => {
        const { trackName,artistName,artworkUrl60,releaseDate,trackPrice,currency, wrapperType } = track;
        const trackEl = document.createElement("tr");
        trackEl.classList.add(wrapperType,"bg-light","border-bottom");
        trackEl.innerHTML = `<tr>
            <td><img src="${artworkUrl60}"/></td>
            <td><p class="artist">${artistName}</p></td>
            <td><p class="title ">${trackName}</p></td>
            <td><p class="releaseDate">${formatDate(releaseDate)}</p></td>
            <td><p class="price">${trackPrice<=0 ? "Free": trackPrice+currency}</p></td>
            </tr>
        `

        body.appendChild(trackEl);
    })
    document.querySelector("#count").textContent = music.length>0 
        ?`There are ${tracks.length} tracks on the list`
        :"No tracks were found"
}


document.querySelector("#search").addEventListener("keyup",(e)=> {
    filter.keyword = e.target.value.toLocaleLowerCase();
    renderTracks(music);
})

document.querySelectorAll("thead th:not(:first-child)").forEach(th=>th.addEventListener("click",(e)=> {
    if(filter.sortProp===e.target.id){
        filter.asc = !filter.asc
    } else {
        filter.sortProp = e.target.id;
    }
    
    console.log(filter)
    renderTracks(music);
}))

document
    .querySelectorAll("input[type='checkbox']")
    .forEach(input=>input.addEventListener("change",(e)=>{
        renderTracks(music)
    }))

renderTracks(music);