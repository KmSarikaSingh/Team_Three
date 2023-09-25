const SearchBtn = document.getElementById('Search');
const treding_container = document.getElementById('trending_container')




const fetchFunction = async ()=>{
let trending_ulr = await fetch("https://api.themoviedb.org/3/movie/popular?&language=en-US&api_key=1ab627320337b55a37f95f68c3756c74")

    const responce = await trending_ulr.json()
    displaycard(responce)
}

const displaycard = (responce)=>{
    const data = responce.results.slice(0 , 9)
    treding_container.innerHTML = ""
    
    const card = data.map((items)=>{
       
        const single = document.createElement('div')
        single.classList.add('single_Card')

        const moviePoster = document.createElement('div')
        const img = document.createElement('img')
        img.classList.add('movieImg');
        moviePoster.classList.add('movie_poster')
        img.src = `https://image.tmdb.org/t/p/w342${items.poster_path}`
        moviePoster.appendChild(img);

        const movieName = document.createElement('div')
        const p = document.createElement('p')
        p.classList.add('movei_p')
        movieName.classList.add('movie_name')
        p.innerText = items.original_title
        
        movieName.appendChild(p)
        single.appendChild(moviePoster)
        single.appendChild(movieName)

        let  a = document.createElement('a')
        const anchor = a.href = `./details.html?id=${items.id}`
        single.addEventListener('click' , ()=>{
            window.location.href = anchor 
        })

        treding_container.appendChild(single)
    })
}

SearchBtn.addEventListener("click" , async ()=>{
    let input_value = SearchBar_Input.value;
    console.log(input_value)
    
    const SearchMovieUrl = await fetch(`https://api.themoviedb.org/3/search/multi?&language=en-US&query=${input_value}&api_key=1ab627320337b55a37f95f68c3756c74`)
    const res = await SearchMovieUrl.json();
    input_value.innerHTML = ""
    displaycard(res ,"")
    
})




fetchFunction();
