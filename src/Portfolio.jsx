function Portfolio({ name,surname,middlename, phone,email,adress,skills,photo }) {
    return (
        <div>
            <p>{name} {surname} {middlename}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{adress}</p>
            <p>{skills.map((i,index) =>(
                <span> {i} {index!==skills.length-1 && ","} </span>
            ))}</p>
            <img width="150" height="100" src={photo} alt="photo" />
        </div>
    )
    
  }
  
  export default Portfolio