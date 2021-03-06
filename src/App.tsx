import { DarkModeSwitch } from "./components/DarkModeSwitch";
import { Widget } from "./components/Widget";

import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} /> 
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      
    <div className="relative w-full h-5 flex items-center justify-between pt-16 pb-2">
      <DarkModeSwitch />
      <Widget />
    </div>
    </TransactionsProvider>
      
    </>
    )
}