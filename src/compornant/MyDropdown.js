import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function   MyDropdown() {
  return (
      <Menu as="div" className="relative inline-block text-left ">
        <div >
          <Menu.Button className="inline-flex justify-center border-2 border-[rgba(255, 255, 255, 0.3)] w-full px-4 py-2 text-sm font-medium text-white bg-transparent rounded-2xl bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Options
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute right-0 w-56 mt-2   origin-top-right bg-transparent border-2 border-[rgba(255, 255, 255, 0.3)] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#D1FAE5] text-[#047857] ' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                   
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#D1FAE5] text-[#047857]' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Duplicate
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#D1FAE5] text-[#047857]' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                   
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#D1FAE5] text-[#047857]' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                   
                    Move
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#D1FAE5] text-[#047857] ' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}
