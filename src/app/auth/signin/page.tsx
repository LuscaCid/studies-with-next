import Head from "next/head";
import Link from "next/link";

export default function SignInPage () {
  return (
    <div>
      <Head>
        <title>Sign In - Program</title>
      </Head>
        <h1>login</h1>
        <form>
          <input 
            type="text"
            placeholder="email"
          />
          <input  
            type="password" 
            placeholder="password"  
          />
          <input type="submit" value='Login' />
        </form>
        
        <div>
          <Link href='/auth/signup'>
            <p>do not have an account? sign up!</p>
          </Link>
        </div>
    </div>
  )
}