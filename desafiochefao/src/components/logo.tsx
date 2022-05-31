import Logo from '/src/images/logo.png'

interface Props extends React.InputHTMLAttributes<HTMLImageElement> {
  customImageClassName?: string
} //aceita elementos HTML dentro do component

const LogoOutside = ({ customImageClassName }: Props) => {
  const imageClassName = ["flex flex-col mx-auto h-fit mb-2 w-auto mt-4", customImageClassName].join(" ")
  return (
    <>
      <header>
        <div className="flex flex-col justify-center items-center">
          <img className={imageClassName}
            src={Logo}
            alt="BrandLogo"
          />
        </div>
      </header>
    </>
  )
}

export default LogoOutside;