import { ChevronLeftIcon } from '@heroicons/react/solid'

const HeaderArrow = () => {
  return (
    <>
      <header>
        <div className="flex flex-col justify-center items-center">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <ChevronLeftIcon className="h-5 w-5 text-Slate-50 group-hover:text-Zinc-50" aria-hidden="true" />
          </span>
        </div>
      </header>
    </>
  )
}

export default HeaderArrow;