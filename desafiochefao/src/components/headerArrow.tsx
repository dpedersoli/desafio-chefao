import { ArrowLeftIcon } from '@heroicons/react/solid'

interface Props {
  link: string,
}

const HeaderArrow = ({ link }: Props) => {
  return (
    <>
      <header>
        <a href={link}>
          <div className="flex items-center justify-start ml-6 mt-6">
            {/* <span className="flex items-center pl-3"> */}
            <ArrowLeftIcon className="h-5 w-5 text-Slate-50 group-hover:text-Zinc-50 mr-2" aria-hidden="true" /> Voltar
            {/* </span> */}
          </div>
        </a>
      </header>
    </>
  )
}

export default HeaderArrow;