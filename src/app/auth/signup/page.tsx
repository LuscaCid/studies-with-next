import Head from "next/head";
import Link from "next/link";

export default function SignUpLayout(){
  return (
    <>
      <Head>
        <title>Sign Up - Program</title>
      </Head>
        <h1>cadastro</h1>
        <form>
          <input 
            type="text"
            placeholder="email"
          />
          <input  
            type="password" 
            placeholder="password"  
          />
          <input type="submit" value='Signup' />
        </form>
        
        <div>
          <Link href='/auth/signin'>
            <p>already have an account? login!</p>
          </Link>
        </div>
    </>
  )
} 