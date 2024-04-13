import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  textOk: string
  textCanel: string
}

export default function Modal({ isOpen, onClose, title, content, textOk, textCanel }: ModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{content}</p>
                  </div>

                  <div className="mt-4 flex items-end justify-end gap-4">
                    <button
                      type="button"
                      className="bg-ButtonRed text-White inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium hover:opacity-90 focus:outline-none 
                      focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      {textCanel}
                    </button>
                    <button
                      type="button"
                      className="bg-ButtonBlue text-White inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium hover:opacity-90 focus:outline-none 
                      focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      {textOk}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
