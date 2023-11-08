import Button from "@/components/button"
import Link from "next/link"

export default function Login() {
  return (
    <main>
      <div className={'w-screen h-screen flex justify-center items-center bg-gray-800'}>
        <div className={'w-[33rem] h-[40rem] rounded-md bg-[#1e2227]'}>
          <div className={'ml-[10%] mt-[10%] text-[#36a6f2]'}>
            <Link href='/'>Return home</Link>
          </div>
          <h1 className={'mb-[5%] mt-[5%] ml-[10%] font-bold text-3xl'}>Login to Tood</h1>
          <form className={'m-[10%]'}>
            <h2 className={'font-bold text-2xl'}>Email</h2>
            <input className={'my-5 rounded-md w-[100%] h-[120%] bg-gray-800 text-xl p-2'} type="text" name="email" placeholder="john@doe.com" />
            <h2 className={'font-bold text-2xl'}>Password</h2>
            <input className={'my-5 rounded-md w-[100%] h-[120%] bg-gray-800 text-xl p-2'} type="password" name="pass" />
            <input type="checkbox" className={'w-[1.3rem] float-left h-[1.3rem] mr-5'} />
            <label>Remember me</label>
            <p className="mt-[5px] text-[#36a6f2]"><Link href='/forgor'>Forgot password?</Link></p>
            <input type="submit" className={'mt-[20%] ml-[90%] flex justify-center items-center rounded cursor-pointer select-none p-2.5 bg-[#077dbe]'} value={'Login'} />
          </form>
        </div>
      </div>
    </main>
  )
}