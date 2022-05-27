import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";

const Goal = () => {

  return (
    <div className="text-center px-12">
      <h1>GOALS</h1>
    </div>
  )
};

export default Goal;

// import { useState } from "react";
// import Button from "../components/Button";

// const Tutorial = () => {
//   const [step, setStep] = useState(1)
//   const steps = [
//     { id: 1, question: 'Escolha qual meta financeira que mais combina com você agora:', options: ['Economizar mais', 'Ter uma renda extra', 'Controlar meus gastos', 'Investir meu dinheiro'] },
//     { id: 2, question: 'Já tem um valor em mente?', options: ['Até R$100,00', 'De R$101,00 a R$500,00', 'Mais de R$500,00', 'O quanto eu conseguir'] },
//     { id: 3, question: 'Em quanto tempo deseja conquistar esse valor?', options: ['semanalmente', 'mensalmente', 'anualmente', 'À medida que der '] },
//   ]
//   const currentStep = steps.find(item => item.id === step) //loop
//   const [savedAnswers, setSavedAnswers] = useState<string[]>([])
//   const nextStep = (answer: string) => {
//     setSavedAnswers([...savedAnswers, answer])
//     if (step === steps.length) {
//       //submit()
//     } else {
//       setStep(step + 1)
//     }
//   }

//   return (
//     <div className="text-center px-12">
//       <h1 className="text-2xl py-20 font-bold">Vamos começar o seu planejamento hoje!</h1>
//       <div className="text-lg h-20">
//         {currentStep?.question}
//       </div>
//       <div >
//         {currentStep?.options.map(option => <Button key={option} customClassName="my-2 rounded-full" onClick={() => nextStep(option)} content={option} />)}
//       </div>
//       {/* no '.map' eu passo o 'key' */}
//       <div className="flex justify-center mt-4">
//         {steps.map(({ id }) => <div className={['w-2 h-2 rounded mx-1', id <= step ? 'bg-zinc-900' : 'bg-zinc-400'].join(' ')}></div>)}
//       </div>
//     </div>
//   )
// };

// export default Tutorial;