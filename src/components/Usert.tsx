import { Suspense } from "react"

export async function User() {
  const response = await fetch(" https://api.github.com/users/timmywheels/repos", {cache : 'no-store'})
  const data = await response.json()

  return (
    <div>
      <Suspense fallback = {<>Carregando</>}>
      {JSON.stringify(data)}

      </Suspense>
    </div>
  )
}