function Navbar() 
{
    return(
    <nav>
        <div className="part1">
        <a href="/">Home</a>
        </div>
        
        <div>
            <input type="search" placeholder="serach the movies" />
            <a href="/addmovies">Add New Movie</a>
            <a href="/favorites">favorites</a>
        </div>
    </nav>
    )
    }
    export default Navbar
