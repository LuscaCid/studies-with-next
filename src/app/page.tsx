'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { User } from "@/components/Usert";
export default function Home() {
  const [id, setId] = useState<number>()
  
  const handleSubmitForm = (e : FormEvent) => {
    e.preventDefault()
    
  }
  return (
    <div>
      <h1>home</h1>
      <form onSubmit={handleSubmitForm}>
        <input 
        onChange={(e) => {setId(parseInt(e.target.value))}}
          placeholder="user id"
          type="number"
        />
        <button type="submit">
          Enviar
        </button>
      </form>
      <Link href='/users'>
        users
      </Link>
      <User />
    </div>
  );
}
