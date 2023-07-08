import React from 'react'
import { createPortal } from 'react-dom'

export default function Modal(): JSX.Element {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  return createPortal(
    <>
      <div className="fixed inset-x-0 mx-auto inset-y-0 my-auto flex items-center justify-center w-96 h-96 bg-white border-lg border-black shadow z-10">
        Here is Sign in or Sign up Modal
      </div>
    </>,
    modalRoot
  )
}