"use client" 
import { useRouter, useSearchParams, usePathname} from "next/navigation"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'

const schemaFormSearchUser = z.object({
  user_id : z.string()
})

type FormType = z.infer<typeof schemaFormSearchUser>
export default function UsersPage() {

  const formProperties = useForm<FormType>({
    defaultValues : {
      user_id : ''
    }
  })

  const { handleSubmit, register } = formProperties
  const { push } = useRouter()
  
  async function handleSubmitForm(data : FormType) {
    const { user_id } = data
    push(`/users/${user_id}`)
  }

  return (
    <form onSubmit={ handleSubmit(handleSubmitForm)}>
      <input
          placeholder="user id"
          type="number"
          {...formProperties.register('user_id')}
        />
      <button type="submit">
        Enviar
      </button>
    </form>
  )
}