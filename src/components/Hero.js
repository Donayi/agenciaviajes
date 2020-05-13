import React from 'react'

const Hero = props =>{
    return(
<section id="home-cover">
    <div>
        <p className="margin-bottom-sm title-font text-shadow">Tour alrededor del mundo</p>
        <p className="margin-bottom-sm subtitle-font text-shadow">Encuentra grandes experiencias, viajes y actividades a precios fantasticos alrededor del mundo</p>
        
    </div>
    <div className="searchbar">
        <input></input>
        <button className="search-button"><i class="fas fa-search"></i></button>

    </div>
</section>
    )
    
}
export default Hero

