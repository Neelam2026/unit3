function navbar(){
   return `<div id="navbar">
     
    <div><img src="https://www.themealdb.com/images/logo-small.png" alt=""></div>
    
  
   
    <p id="nav_p" onclick="window.location.href='index.html'">Home</p>
    <p  id="nav_p" onclick="window.location.href='receipe_of_day.html'">Receipe Of The Day</p>
    <p id="nav_p" onclick="window.location.href='latest.html'">Latest Meals</p>
    <input id="inp2"  type="text" placeholder="Search your meal here...">
    <button id="search">Search</button>    
    
</div>`
}

export default navbar;