interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string,
  customClassName?: string,
  leftImage?: string
} //aceita elementos HTML dentro do component

const Button = ({ content, customClassName, leftImage, ...props }: Props) => {
  const className = ["group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", customClassName].join(" ")

  return (
    <div>
      <button
        className={className}
        {...props}
      >
        {leftImage ? <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <img src={leftImage} className="h-8 w-8" />
        </span> : null}
        {content}
      </button>
    </div>
  )
}

export default Button