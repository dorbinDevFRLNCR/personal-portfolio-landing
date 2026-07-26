'use client'

import { useEffect, useSyncExternalStore, type PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'

type ModalProps = {
  onClose: () => void
}

// Простой подписчик для определения клиентского окружения без вызова setState в useEffect
const emptySubscribe = () => () => {}
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
}

function Modal({ onClose, children }: PropsWithChildren<ModalProps>) {
  const isClient = useIsClient()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!isClient) return null

  return createPortal(
    <motion.div
      initial={{ top: '-10%' }}
      animate={{ top: 0 }}
      exit={{ top: '-20%', opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="menu fixed inset-0 bg-navy flex flex-col p-4"
    >
      <div className="flex justify-between w-full mb-4">
        <p className="title text-xl font-bold font-heading tracking-tighter">Menu</p>
        <X size={24} color="#EEF0FF" onClick={onClose} />
      </div>
      <div className="flex-1 overflow-hidden flex-col items-center gap-4">{children}</div>
    </motion.div>,
    document.body
  )
}

export default Modal
