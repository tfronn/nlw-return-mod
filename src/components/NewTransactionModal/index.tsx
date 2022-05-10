import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-model-overlay"
      className="react-modal-content w-full max-w-screen-md bg-white dark:bg-zinc-900 p-12 relative rounded-md"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close absolute right-12 top-14 border-0 bg-transparent hover:opacity-70"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <form onSubmit={handleCreateNewTransaction}>
        <h2 className="text-zinc-800 dark:text-zinc-100 text-xl">Cadastrar Transação</h2>

        <input
          className="placeholder:text-zinc-800 dark:placeholder:text-zinc-100 mt-4 w-full py-4 px-6 rounded-md border border-zinc-500 bg-zinc-100 dark:bg-zinc-600 text-base"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          className="placeholder:text-zinc-800 dark:placeholder:text-zinc-100 mt-4 w-full py-4 px-6 rounded-md border border-zinc-500 bg-zinc-100 dark:bg-zinc-600 text-base"
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <div className="my-4 mx-0 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => {
              setType('deposit')
            }}
            
            
            className="focus:bg-greenDiv-500 focus:bg-opacity-30 h-16 border border-zinc-500 rounded-md flex items-center justify-center hover:border-zinc-700"
          >
            <img className="h-5 w-5" src={incomeImg} alt="Entrada" />
            <span className="inline-block ml-4 text-zinc-800 dark:text-zinc-100 active:text-color-zinc-800">Entrada</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setType('withdraw')
            }}
            
            
            className="focus:bg-red-500 focus:bg-opacity-30 h-16 border border-zinc-500 rounded-md flex items-center justify-center hover:border-zinc-700"
          >
            <img className="h-5 w-5" src={outcomeImg} alt="Saída"  />
            <span className="inline-block ml-4 text-zinc-800 dark:text-zinc-100 active:text-color-zinc-800">Saída</span>
          </button>
        </div>

        <input
          className="placeholder:text-zinc-800 dark:placeholder:text-zinc-100 w-full mb-4 py-4 px-6 rounded-md border border-zinc-500 dark:bg-zinc-600 bg-zinc-100 text-base"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit" className="w-full py-0 px-6 h-16 bg-greenDiv-500 text-zinc-100 dark:text-zinc-800 rounded-md border-0 text-xl mt-6 hover:bg-emerald-500 font-semibold">Cadastrar</button>
      </form>
    </Modal>
  )
}
