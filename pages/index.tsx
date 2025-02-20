import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import UploadCsv from '../components/upload'

const Home: NextPage = () => {
  const submitRow =async (params:string) => {
    const response = await fetch('/api/sheet');
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Magic Sheets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-5 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
          Magic Sheets
          </a>
        </h1>
        <p className="mt-3 text-1xl">
          Get started by uploading{' '}
          <UploadCsv />
        </p>
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
          Made with ❤️{' '} <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
          in London
          </code>
      </footer>
    </div>
  )
}

export default Home
