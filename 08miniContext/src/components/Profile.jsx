import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const [count, setCount] = useState(0)
    const {user} = useContext(UserContext)

    if(!user) return <h1>Not logged in</h1>
  return (
    <div>
        <h1>Profile : {user.username}</h1>
    </div>
  )
}

export default Profile