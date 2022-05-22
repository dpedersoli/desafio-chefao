interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string,
  content: string
} //aceita elementos HTML dentro do component

const Input = ({ id, content, ...props }: Props) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm">
        {content}
      </label>
      <input
        id={id}
        name={id}
        className="mt-2 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow-sm"
        placeholder={content}
        {...props} //p não precisar declarar tudo
      />
    </div>
  )
}

export default Input