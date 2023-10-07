/* eslint-disable react/prop-types */

import { User } from "./User"


export const Users = ({details}) => {

  // const keys = Object.keys(details)
  // const values = details;
  // const entries = Object.entries(details)

  // const {name, email} = details;

  // console.log(details)
  return (
    <>
        <div className="container">
            <h1>Users List</h1>
            
           
              {/* <p>f {values[0]}</p> */}
              
              {/* mapping each user (obj inside of array -> [{}]) of details[]  -> to a user component */}
              
                {/* to arrange in table rows later */}

                
              
                {details.map((user) => 
                (
                  
                  <User key={user.id} user={user}></User>
                )
                )}
              

            
        </div>
    </>
  )
}
