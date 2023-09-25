# Team_Three
# Html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Team Three Movie</title>
</head>
<link rel="stylesheet" href="style.css">
<body>
    
   <nav>
    <div class="heading">
        <h1>Team <span>Three</span> Movies</h1>
    </div>
    <div class="link"><a href="">
        <button>Home</button>
    </a></div>
   </nav>

   <div class="Img">
    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="">
</div>
   <section class="first">
    <div class="searchBox">
        <div class="main_Container">
            <h1>Search For a Movie</h1>
            
                <input type="text" id="SearchBar_Input" class="SearchBar" placeholder="Search Moveies">
                <input type="button" id="Search" class="Search_Btn" value="Search" >
            
        </div>
    </div>
   </section>
   
     <section>
    <div id="moviess">
        
    </div>

    <div class="Treding">
        <h1>Trending</h1>
    </div>

    <div class="treding_card_container" id="trending_container">
        
    </div>
   </section>
   <script src="index.js"></script>
   <script src="details.js"></script>
</body>
</html>
```
# CSS
```
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

nav{
    background-color: rgba(13, 37, 63);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
 .heading{
    font-size: 1.5rem;
    margin-right: 3rem;
    margin-left: 4rem;
    color: rgba(1, 180, 228);
    font-family: 'Poppins', sans-serif;  
}
  span{
    color: rgba(144, 206, 161);
}

.link button{
    padding: 1rem 1rem;
    margin-right: 3rem;
    font-weight: 600;
    font-size: 20px;
    background-color: rgba(13, 37, 63);
    color: rgba(1, 180, 228);
    border: none;
}

.link button:hover{
    background-color: white;
}


.Img{
    margin-top: 1.2rem;
    margin-right: 1.2rem;
    width: 25%;
    display: flex;
    justify-content: end;
    float: right;
   
}
.first{
    height: 40vh;
}
.searchBox{
    width: 100%;
    margin-top: 3rem;
}
.main_Container{
    width: 80%;
    margin: 0 auto;
}
.main_Container h1{
    
    font-size: 2rem;
    font-weight: 500;
    width: 100%;
    
}
.main_Container .SearchBar{
    width: 80%;
    padding: 1rem 2rem;
    border: none;
    margin-top: 0.9rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
.main_Container .SearchBar:hover{
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
.Search_Btn{
    padding: 1rem 1.4rem;
    border-radius: 5px;
    border: none;
    font-size: 1.4rem;
    background-color: rgba(13, 37, 63);
    color: rgba(1, 180, 228);
    margin-left: 1rem;
}

.Treding{
    font-size: 2rem;
    margin-left: 3rem;
}
.treding_card_container{
    
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
}
.single_Card{
    margin-top: 2rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   /* border: 1px solid red; */
   width: 25%;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   transition: 0.1s;
   height: 400px;
}
.single_Card:hover{
    transform: scale(1.1);
}
.movie_poster{
    margin-top: 0.5rem;
    width: 90%;
    display: flex;
    justify-content: center;
    height: 300px;
}
.movieImg{
    width: 100%;
}
.movei_p{
    text-align: center;
}
.movie_name {
    font-size: 1.5rem;
    margin-top: 2rem;
    
}

.details{
    display: flex;
    justify-content: start;
    align-items: center;
    
}
.Details_images2{
    
    height: 500px;
    border-radius: 20px;
    margin: 2rem 2rem;
    margin-top: 2rem;
}

.movie_Charector{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.movie_Charector h1{
    font-size: 3rem;
    font-weight: lighter;
    margin-bottom: 20rem ;
    margin-left: -1rem;
    /* margin-top: 10rem; */
}
.movie_Charector p{
    font-size: 1.5rem;
    font-weight: bold;
}
.movie_CharectorImg{
    height: 250px;
    width: 30%;
    border-radius: 10px;
}
.main_credits_Card{
    
    width: 15%;
    display: flex;
    flex-wrap: wrap;
    height:350px;
}

.main_credits_Card_Imgs{
    width: 113%;
    height: 240px;
    border-radius: 19px;
}

.mainCharector{
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}
.creadits_name{
    font-size: 1.5rem;
    text-align: center;
}
.parent{
    display: flex;
    width: 102%;
    margin-top: 5rem;
    justify-content: space-between;
    height: 500px;
}

.story{
    float: right;
    width: 70%;
    margin-top: 2rem;
}
.story_Line_heading{
    font-size: 2.3rem;
}
.story_para, p{
    font-size: 1.3rem;
    font-family: 'Poppins', sans-serif; 
    padding: 1rem 0.5rem;
}
.more_move_Section{
    margin-top: 12rem;
    
}
.Movie_Card{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    width: 100%;
}

.recome{
    width: 200px;
    height: 400px;
}
```
# js
```
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

```

```
const details = document.getElementById('details')
const main_Container = document.getElementById("mainCharector")
const story_Linemain = document.getElementById("story")
const more_Movie_Card_Container = document.getElementById("Movie_Card")

const urlParams = new URLSearchParams(window.location.search)
const movieId = urlParams.get('id');




const fetch_Search_Img = async()=>{
    const url = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=1ab627320337b55a37f95f68c3756c74`)
    const data = await url.json();
    display_card1(data)
    


    const url2 = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=1ab627320337b55a37f95f68c3756c74`)
    const data2 = await url2.json()
    display_creedits_Card_card1(data2 , data)
     
    const url3 = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?&api_key=1ab627320337b55a37f95f68c3756c74`)
    const data3 = await url3.json()

    recommendations_Movei(data3)
}

const display_card1 = (data)=>{
    const Arr = []
    const result = data;
    Arr.push(result)
    

    Arr.map((ele)=>{
            const imgDiv = document.createElement('div')
            const image = document.createElement('img')
            image.classList.add("Details_images2")

           
            const movie_Charector = document.createElement('div')
            movie_Charector.classList.add('movie_Charector')
            const heading = document.createElement('h1')
            heading.innerText = ele.original_title
            image.src = `https://image.tmdb.org/t/p/w500/${ele.poster_path}`
            imgDiv.appendChild(image)
            details.appendChild(imgDiv)

            movie_Charector.appendChild(heading)
            details.appendChild(movie_Charector)
    })

}

const display_creedits_Card_card1 = (data2 , data)=>{
   const arays = []

        arays.push(...data2.cast.slice(0, 4))
        
       const Show_credit_cards  = arays.map((items)=>{
            const main_credits_Card = document.createElement('div')
            main_credits_Card.classList.add('main_credits_Card')
            const main_credits_Card_Imgs = document.createElement('img')
            main_credits_Card_Imgs.classList.add('main_credits_Card_Imgs')
            main_credits_Card_Imgs.src = `https://image.tmdb.org/t/p/w185${items.profile_path}`
            const creadits_name = document.createElement('p')
            creadits_name.classList.add('creadits_name')
            creadits_name.innerText = items.name
            main_credits_Card.appendChild(main_credits_Card_Imgs);
            main_credits_Card.appendChild(creadits_name)
            main_Container.appendChild(main_credits_Card);
        })

        const DataArr = [];
        DataArr.push(data)
        
        const Overwive = DataArr.map((items)=>{    
            
            const story_para = document.createElement('div')
            const story_para_p =document.createElement('p')
            story_para_p.innerText = items.overview;
            story_para.appendChild(story_para_p);
            story_Linemain.appendChild(story_para)

        })
}

const recommendations_Movei = (data3)=>{
    const result = data3.results.slice(0 ,5);
    console.log(result);

        result.map((items)=>{
            const single_Card = document.createElement('div')
            single_Card.classList.add('single_Card')
            single_Card.classList.add('recome')
    
            const movie_poster = document.createElement('div')
            const img = document.createElement('img')
            img.classList.add('movieImg');
            movie_poster.classList.add('movie_poster')
            img.src = `https://image.tmdb.org/t/p/w342${items.poster_path}`
            movie_poster.appendChild(img);
    
            const movie_name = document.createElement('div')
            const p = document.createElement('p')
            p.classList.add('movei_p')
            movie_name.classList.add('movie_name')
            p.innerText = items.original_title
            
            movie_name.appendChild(p)
            single_Card.appendChild(movie_poster)
            single_Card.appendChild(movie_name)
    
            let  a = document.createElement('a')
            const anchor = a.href = `./details.html?id=${items.id}`
            single_Card.addEventListener('click' , ()=>{
                window.location.href = anchor 
            })
    
            more_Movie_Card_Container.appendChild(single_Card)
        })
}
fetch_Search_Img();

```
