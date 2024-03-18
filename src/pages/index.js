import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  
  // useEffect(()=>{
  //   if(process.browser && !localStorage.getItem('token')){
  //       router.push({pathname:'/signin'})    
  //   }
  //   else if(!process.browser){
  //     router.push({pathname:'/signin'})
  //   }
  // },[])
  
  return (
    <Layout>
      <div>
        Main page
      </div>
    </Layout>
  )
}
export async function getServerSideProps(context) {
  if (!context.req.cookies['token']) {
    console.log("token not present")
    context.res.statusCode = 302
    context.res.setHeader('Location', `signin`)
    //document.cookie = 'Jwt-token=;expires=' + new Date().toUTCString() to remove the cookie when user signs out

  }
  else {
    console.log("token present...")
  }
  return { props: {} }
}