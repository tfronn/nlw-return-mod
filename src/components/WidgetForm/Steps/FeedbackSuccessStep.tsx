import { CloseButton } from "../../CloseButton";
import successImg from '../../../assets/success.svg'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImg} alt="Imagem de sucesso" />
        <span className="text-xl mt-8">
        Agradecemos o feedback!
        </span>

        <button 
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 rounded-md border-transparent text-sm leading-6 dark:hover:bg-zing-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
          Quero enviar outro
        </button>
      </div>
    </>
  )
}