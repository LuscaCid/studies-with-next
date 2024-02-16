"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface paramsId {
  params : {users_id : string}
}
export default function UsersDetailPage ({params} : paramsId) {
  const users_id  = useSearchParams()
  console.log(users_id)

  const [todo, setTodo] = useState<any []>([])

  useEffect(() => {
    async function FetchData(){
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.users_id}`)
      const data = await response.json()
      setTodo((prev : any) => [...prev, data])
    }
    FetchData()
  }, [setTodo, params])

  return (
    <div>
      <h1>users_id que vem de props: {params.users_id}</h1>
      
      <ul>
        {
          todo.length > 0 && todo.map((element : any) => {
            return (
              <div key={element.id}>
                <li>{element.title}</li>
                <li>{element.completed}</li>
                <li>{element.userId}</li>
                <li>{element.id}</li>
                <li>{element.body}</li>
              </div>
            )
          })
        } 
      </ul>
    </div>
  )
}
//'https://jsonplaceholder.typicode.com/todos/1'