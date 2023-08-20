import BackButton from '@/components/ui/back-button'

export default async function AboutContainer() {

  return (
    <section className="max-w-screen-xl mx-auto min-h-screen px-6 md:px-12 lg:px-24 py-6 font-sans">
      <BackButton/>
      <div className="relative lg:flex lg:justify-between lg:gap-4">
        <header className="lg:w-1/2 mb-12 md:pr-20">
          <h2 className="text-2xl font-semibold text-slate-300">
            Why I built this?
          </h2>
          <p className="mt-6 text-md leading-normal text-slate-400">
            Working as a freelance developer means I can&apos;t really share any code I wrote for my clients. 
          </p>
          <p className="mt-6 text-md leading-normal text-slate-400">
            This website is a way for me to showcase my skills. I&apos;m always looking for feedback, so feel free to reach out to me if you have any suggestions or questions at bonu@bonu.dev.
          </p>
          <p className="mt-6 text-md leading-normal text-slate-400">
            I built this website using my favourite tech stack: Next.js, Tailwind CSS and Ruby on Rails. It might be an overkill for a simple portfolio, but this is what I use day to day on more complex projects.
          </p>
        </header>
        <div className="lg:w-1/2 flex flex-col">
          <h2 className="text-2xl font-semibold text-slate-300">
            Front end
          </h2>
          <p className="mt-6 text-md leading-normal text-slate-400">
            I used Next.js to build this website. Next.js is a great framework for building applications of any size.
          </p>
          <p className="mt-6 text-md leading-normal text-slate-400">
            All of the public facing pages are statically rendered, which means they are fast and SEO friendly. Admin panel on the other hand is client side rendered, since it has forms and other dynamic content.
          </p>
          <p className="mt-6 text-md leading-normal text-slate-400">
            I tried limiting the use of 3rd party libraries to a minimum. All components are hand crafted and styled with Tailwind CSS. This allows me to keep the bundle size small and the website fast.
          </p>
          <p className="mt-6 text-md leading-normal text-slate-400">
            I also used SWR to fetch data from the server on the admin panel. It&apos;s a great library that makes data fetching, caching and updating easy and efficient.
          </p>
          <h2 className="mt-6 text-2xl font-semibold text-slate-300">
            Back end
          </h2>
          <p className="mt-6 text-md leading-normal text-slate-400">
            Since the beginning of my career I&apos;ve been using Ruby on Rails for most of my projects. It&apos;s a great framework for building APIs.
          </p>
          <p className="mt-6 text-md leading-normal text-slate-400">
            For the most part this looks like a typical Rails application. Devise for authentication, Blueprinter for serializing data, RSpec for testing.
          </p>
          <p className="mt-6 text-md leading-normal text-slate-400">
            But where to put the business logic? It seems like there is no consensus on this. I like to keep my controllers as thin as possible, so I put most of the business logic in ops. It&apos;s a pattern I learned in one of the projects I worked on and I&apos;ve been using it ever since. Having a separate file for each operation makes the code easy to read and test.
          </p>
          <p className="mt-6 text-md leading-normal text-slate-400">
            But I didn&apos;t want to build a simple CRUD app. Had to throw in some third party integration. Each project can have multiple attached images, so I used Cloudinary to store them. It&apos;s a great service for storing and manipulating images and can generate thumbnails on the fly with simple transformation parameters.
          </p>
          <h2 className="mt-6 text-2xl font-semibold text-slate-300">
            Deployment
          </h2>
          <p className="mt-6 text-md leading-normal text-slate-400">
            Since I wrote the front end in Next.js, it&apos;s only natural that I went with Vercel for deployment. Those guys are doing a great job at making deployment easy and fast. And I&apos;ve yet to seen an easier way to set up a custom domain for a front end web application.
          </p>
          <p className="mt-6 text-md leading-normal text-slate-400">
            The back end is deployed on Heroku. It&apos;s a great platform for deploying and running server applications. One thing I like about heroku is their Postgres database. It&apos;s super easy to spin up a new database and connect it to the application.
          </p>
          <p className="mt-6 text-md leading-normal text-slate-400">
            By no means I&apos;m an expert in dev ops, so I&apos;m glad there are platforms like Vercel and Heroku that make deployment easy and painless. Both of them have the continuous deployment feature, so I don&apos;t have to worry about deploying the application manually, just need to push my code to Github
          </p>
        </div>
      </div>
    </section>
  )
}
