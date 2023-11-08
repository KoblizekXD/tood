'use client'

import Navbar from '@/components/navbar'
import NavItem from '@/components/navitem'
import ReversedNavItems from '@/components/reversed'
import Image from 'next/image'
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
    <div>
      <Navbar>
          <NavItem href='/'>{text}</NavItem>
          <ReversedNavItems>
            <NavItem href='/login'>Login</NavItem>
            <NavItem className='bg-[#077dbe]' href='/register'>Register</NavItem>
          </ReversedNavItems>
        </Navbar>
    </div>
  )
}
