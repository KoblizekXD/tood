import Button from "@/components/button"
import Link from "next/link"

export default function Register() {
  return ( // STIMHLE UZ SE VZIVOTE NEMRDAM
    <main>
      <div className={'w-screen h-screen flex justify-center items-center bg-gray-800'}>
        <div className={'w-[33rem] h-[40rem] rounded-md bg-[#1e2227]'}>
          <div className={'ml-[10%] mt-[10%] text-[#36a6f2]'}>
            <Link href='/'>Return home</Link>
          </div>
          <h1 className={'mt-[5%] ml-[10%] font-bold text-3xl'}>Register</h1>
          <form className={'m-[10%] mt-[]'}>
          <h2 className={'font-bold text-2xl'}>Username</h2>
            <input className={'my-5 rounded-md w-[100%] h-[120%] bg-gray-800 text-xl p-2'} type="text" name="email" />
            <h2 className={'font-bold text-2xl'}>Email</h2>
            <input className={'my-5 rounded-md w-[100%] h-[120%] bg-gray-800 text-xl p-2'} type="text" name="email" placeholder="john@doe.com" />
            <h2 className={'font-bold text-2xl'}>Password</h2>
            <input className={'my-5 rounded-md w-[100%] h-[120%] bg-gray-800 text-xl p-2'} type="password" name="pass" />
            <input type="checkbox" className={'w-[1.3rem] float-left h-[1.3rem] mr-5'} />
            <label>Remember me</label>
            <p className="mt-[5px] text-[#36a6f2]"><Link href='/login'>Already have an account?</Link></p>
            <input type="submit" className={'ml-[85%] mt-[-5%] flex justify-center items-center rounded cursor-pointer select-none p-2.5 bg-[#077dbe]'} value={'Register'} />
          </form>
        </div>
      </div>
    </main>
  )
}