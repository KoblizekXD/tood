'use client'

import Button from '@/components/button'
import Navbar from '@/components/navbar'
import NavItem from '@/components/navitem'
import ReversedNavItems from '@/components/reversed'
import { useEffect, useState } from 'react'

export default function Home() {
  const [text, setText] = useState('Tood')
  useEffect(() => {
    const id = setInterval(() => {
      if (text.endsWith('█')) {
        setText('Tood')
      } else setText('Tood█')
    }, 500)

    return () => {
      clearInterval(id)
    }
  }, [ text ])
  return (
    <main>
      <Navbar>
          <NavItem href='/'>{text}</NavItem>
          <ReversedNavItems>
            <NavItem href='/login'>Login</NavItem>
            <NavItem className='bg-[#077dbe]' href='/register'>Register</NavItem>
          </ReversedNavItems>
      </Navbar>
      <div className="flex justify-center items-center space-y-10 h-screen flex-col">
        <h1 className={'text-center text-5xl font-bold'}>The best Todo app you&apos;ve ever seen</h1>
        <h2 className={'text-center text-3xl'}>Get started now for free!</h2>
        <div className='flex space-x-5'>
          <Button href='/register' className={'bg-[#077dbe] w-[120px]'}>Get started</Button>
          <Button href='/login' className={'border w-[120px]'}>Login</Button>
        </div>
      </div>
    </main>
  )
}
