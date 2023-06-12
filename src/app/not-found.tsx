import Link from 'next/link'

export default function NotFound() {
  return (
    <div className={"w-full gap-3 h-[70vh] flex flex-col justify-center items-center"}>
      <h1 className={'font-extrabold text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple to-sky'}>404</h1>
      <h2 className={'text-3xl'}>Page Not Found</h2>
      <p>This page doesn&apos;t exist</p>
      <a href={"/"} className={'px-5 py-2 bg-violet-dark rounded-full border-2 border-sky text-sky hover:border-transparent hover:bg-sky hover:text-violet'}>
        Home
      </a>
    </div>
  )
}