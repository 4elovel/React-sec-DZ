function Film({ title, regeseur,year,studio,poster }) {
    return (
        <div>
            <p>{title}</p>
            <p>{regeseur}</p>
            <p>{year}</p>
            <p>{studio}</p>
            <img width="100" height="100" src={poster} alt="poster" />
        </div>
    )
  }
  
  export default Film