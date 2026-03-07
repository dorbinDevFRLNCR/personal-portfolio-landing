import type { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import { CgClose } from 'react-icons/cg'
import { motion } from 'framer-motion'

type ModalProps = {
  onClose: () => void
  key?: string
}

function Modal({ onClose, children, key }: PropsWithChildren<ModalProps>) {
  return ReactDOM.createPortal(
    <motion.div
      key={key}
      initial={{ top: '-10%' }}
      animate={{ top: 0 }}
      exit={{ top: '-20%', opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="menu fixed inset-0 bg-navy flex flex-col p-4"
    >
      <div className="flex justify-between w-full mb-4">
        <p className="title text-xl font-bold font-heading tracking-tighter">Menu</p>
        <CgClose size={24} color="#EEF0FF" onClick={onClose} />
      </div>
      <div className="flex-1 overflow-hidden flex-col items-center gap-4">{children}</div>
    </motion.div>,
    document.body
  )
}

export default Modal
