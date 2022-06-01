import { useEffect, useState } from 'react'

import api from '../services/api'

interface User {
  name: string;
}

const Username = () => {
  const [data, setData] = useState<User>({} as User)

  useEffect(() => {
    api.get("/users/username")
      .then(response => {
        setData(response.data)
      })
      .catch(error => error)
  }, [])

  return (
    <div>
      <p>{data.name}</p>
    </div>
  )
}

export default Username;