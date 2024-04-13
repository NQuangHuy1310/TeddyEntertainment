import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { IconType } from 'react-icons'
import { FaChevronDown } from 'react-icons/fa'

interface MenuItemProps {
  active: boolean
  iconActive: IconType
  iconInactive: IconType
  text: string
  link: string
}

interface MenuProps {
  menuButtonLabel: string
  menuItems: MenuItemProps[]
  image?: string
}

export default function Dropdown({ menuButtonLabel, menuItems, image }: MenuProps) {
  return (
    <div className="fixed top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className="bg-primary inline-flex w-full justify-center rounded-md px-4 py-2 text-sm 
            font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            {menuButtonLabel}
            <img src={image ? image : ''} alt="" />
            <FaChevronDown className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            {menuItems.map((item, index) => {
              return (
                <div className="px-1 py-1" key={index}>
                  <Menu.Item>
                    {({ active }) => {
                      return (
                        <button
                          className={`${
                            active ? 'text-gray-900' : 'text-gray-600'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <item.iconActive className="mr-2 h-5 w-5" aria-hidden="true" />
                          ) : (
                            <item.iconInactive className="mr-2 h-5 w-5" aria-hidden="true" />
                          )}
                          {item.text}
                        </button>
                      )
                    }}
                  </Menu.Item>
                </div>
              )
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
