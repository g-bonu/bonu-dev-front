import Link from "next/link";

export default function Project({id,  startYear, endYear, organization, title, description }) {
  return (
    <Link href="/projects/[id]" as={`/projects/${id}`}>
      <div className="flex md:flex-row flex-col group justify-between md:gap-8 relative md:pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
        </div>
        <header className="flex-none z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {startYear} — {endYear || 'Present'}
        </header>
        <div className="flex-1 z-10">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                </span>
                <span>
                  {title}
                </span>
              </div>
            </div>
            <div>
              <div className="text-slate-500">
                {organization}
              </div>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal whitespace-pre-wrap">
            {description}
          </p>
          <div className="group leading-4 pt-4 text-sm text-teal-600">
            More Info
            <svg className="inline ml-2 fill-teal-600 h-4 w-4" viewBox="0 0 24 24">
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}