export default function Container({ children }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
      <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-slate-800/50">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-300 md:text-2xl">
            Sorry, can&#39;t let you in
          </h1>
          <p className="text-sm text-slate-400">
            I&#39;m the only one with access to admin panel for obvious reasons. But feel free to check out the source on github if you are really curious.
          </p>
          <form className="space-y-8">
            {children}
          </form>
        </div>
      </div>
    </div>
  )
}