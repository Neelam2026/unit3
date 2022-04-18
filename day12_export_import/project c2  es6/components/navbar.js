function navbar(){
    return `
    <img src="https://www.themealdb.com/images/logo-small.png" alt="">
        <p onclick="window.location.href='index.html'">Home</p>
        <p onclick="window.location.href='todayrecipe.html'">Today's Recipe</p>
        <p onclick="window.location.href='latest.html'">Latest Meals</p>
        <input id="search"  type="text" placeholder="Search your meal here...">
        <button id="btn">Search</button>    
    `
};

export default navbar;