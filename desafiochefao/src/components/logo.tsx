interface Props extends React.InputHTMLAttributes<HTMLImageElement> {
  customImageClassName?: string
} //aceita elementos HTML dentro do component

const LogoOutside = ({ customImageClassName, ...props }: Props) => {
  const imageClassName = ["flex flex-col mx-auto h-fit mb-2 w-auto", customImageClassName].join(" ")
  return (
    <>
      <header>
        <div className="flex flex-col justify-center items-center">
          <img className={imageClassName}
            src="src\images\logo.png"
            alt="BrandLogo"
          />
        </div>
      </header>
    </>
  )
}

export default LogoOutside;