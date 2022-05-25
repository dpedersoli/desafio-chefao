interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string,
  content: string,
  customInputClassName?: string
} //aceita elementos HTML dentro do component

const Input = ({ id, content, customInputClassName, ...props }: Props) => {
  const inputClassName = ["mt-1 appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow-sm text-sm", customInputClassName].join(" ")

  return (
    <div>
      <label htmlFor={id} className="text-sm text-gray-400">
        {content}
      </label>
      <input
        id={id}
        name={id}
        className={inputClassName}
        {...props} //p não precisar declarar tudo
      />
    </div>
  )
}

export default Input