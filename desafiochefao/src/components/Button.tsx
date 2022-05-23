interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string,
  customClassName?: string
} //aceita elementos HTML dentro do component

const Button = ({ content, customClassName, ...props }: Props) => {
  const className = ["group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", customClassName].join(" ")

  return (
    <div>
      <button
        className={className}
        {...props}
      >
        {content}
      </button>
    </div>
  )
}

export default Button