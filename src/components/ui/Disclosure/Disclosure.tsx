import { Disclosure } from '@headlessui/react'
import { FaAngleDown } from 'react-icons/fa'

interface DisclosureUiProps {
  items: {
    question: string
    answer: string
  }[]
}

export default function DisclosureUi({ items }: DisclosureUiProps) {
  return (
    <div className="w-full px-4">
      <div className="mx-auto flex w-full max-w-md flex-col gap-2 rounded-2xl bg-white p-3">
        {items.map((item, index) => (
          <Disclosure as="div" key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm 
                font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                >
                  <span>{item.question}</span>
                  <FaAngleDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">{item.answer}</Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}
