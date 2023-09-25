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

