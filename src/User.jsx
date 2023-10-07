/* eslint-disable react/prop-types */


export const User = ({user}) => {
    
    // console.log(user)
  return (
    <div className="text-center " >
        {user.name ? (<div style={userStyle}><h4>{user.name} </h4> <p>Email : {user.email}</p></div>) : <p></p>  }

        {/* { ?  : " " } */}

        {/* { <p>{user.name}</p> ? <p>sji</p> : <p>isl</p>} */}
        
    </div>
  )
}

const userStyle = {
  border: '3px solid #ddd',
  padding: '10px',
  margin: '10px',
  borderRadius: '5px',
  // backgroundColor: '#f9f9f9',
  
}
