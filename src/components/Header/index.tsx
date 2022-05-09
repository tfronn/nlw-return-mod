import logoImg from '../../assets/logo.svg'


interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <header className="bg-brand-500">
      <div className="max-w-screen-xl my-0 mx-auto pt-8 px-4 pb-48 flex align-center justify-between">
        <img src={logoImg} alt="dt money" />
        <button className="text-base text-zinc-100 bg-brand-300 border-0 py-0 px-8 rounded-md h-12 hover:bg-opacity-70" type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </div>
    </header>
  )
}
