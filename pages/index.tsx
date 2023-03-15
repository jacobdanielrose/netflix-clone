import { Inter } from 'next/font/google'
import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'
import useCurrentUser from '@/hooks/useCurrentUser'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {

  const { data: user } = useCurrentUser()

  return (
    <>
      <Navbar />
      <h1 className={"text-4xl text-red-500"}>Netflix Clone</h1>
      <p className='text-white'>Logged in as: {user?.email}</p>
      <button className='h-10 w-40 bg-white'
        onClick={() => signOut()}>
        Logout
      </button>
    </>
  )
}
