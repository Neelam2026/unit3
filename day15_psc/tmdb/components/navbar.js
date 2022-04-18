function navbar(){
    return ` <div id="navbar">
    <img
      id="img"
      src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
      alt=""
    />
    <p onclick="window.location.href='index.html'">Home</p>
    <p>TV Shows</p>
    <p>People</p>
    <p>More</p>
    <input id="searchbar" type="text" placeholder="Popular movies....." />
    <button id="button" onclick="window.location.href='login.html'">Login</button>
    <button id="button" onclick="window.location.href='signup.html'">Sign up</button>
    <div id="show_name"></div>
  </div>`
}


export default navbar;
