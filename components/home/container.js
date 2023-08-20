export default function Container({children}) {
  return (
    <div className="relative">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {children}
        </div>
      </div>
    </div>
  )
}