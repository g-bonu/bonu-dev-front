import Avatar from "@/components/home/avatar"
import LinkButton from "@/components/ui/link-button"
import Link from 'next/link'

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:py-24">
      <div className="flex">
        <Avatar width={60} height={60} />
        <div className="ml-6 text-slate-300 text-sm">
          <div className="text-4xl font-bold text-slate-100">Hi, I&apos;m Bonu</div>
          <div className="text-l font-medium text-slate-300">A Decent Full Stack Developer</div>
        </div>
      </div>
      <div className="mt-16 font-normal flex flex-col gap-2 max-w-s md:pr-20">
        <p>I created this website to display the skills I use in my daily work with clients.</p> 
        <p>Crafted with NextJS, styled with Tailwind, backed by Ruby on Rails, deployed on Vercel and Heroku.</p>
        <p><Link href='/about' className="text-teal-600 hover:text-teal-300">Learn more</Link> about the technology behind this website or check out the source code on my GitHub.</p>
        <p>If you think I might be a good fit for your project, shoot me an email at bonu@bonu.dev</p>
      </div>
      <div className="md:mt-16 mt-8 flex flex-row gap-6">
        <Link href="https://github.com/g-bonu" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="fill-slate-400 h-8 w-8" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></Link>
        <Link href="https://www.linkedin.com/in/gulbonu-usarova-082a2b178" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-slate-400 h-8 w-8" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></Link>
      </div>
      <div className="md:block hidden relative pt-2 text-slate-300">
        <LinkButton className="group" href="/admin/projects" type="text">
          Access Admin Panel
          <svg className="inline ml-2 group-hover:fill-teal-300 fill-teal-600 h-4 w-4" viewBox="0 0 24 24">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
          </svg>
        </LinkButton>
      </div>
    </header>
  )
}