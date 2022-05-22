interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
} //aceita elementos HTML dentro do component

const Button = ({ content, ...props }: Props) => {
  return (
    <div>
      <button
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        {...props}
      >
        {content}
      </button>
    </div>
  )
}

export default Button