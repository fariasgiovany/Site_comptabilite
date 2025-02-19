"use client"
import { useState } from 'react';
import Link from 'next/link'
import React from 'react';


export default function Dropdown({itens}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className=" w-full rounded-md   pt-2 px-4 "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <img src="/images/menu.png" className='size-9'   alt="menu" />
          
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-3 w-1/2 rounded-md shadow-lg bg-rose-500 ring-1 ring-white ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          {itens.map((itens) =>(
          <div className="py-3" role="none" key={itens.ID}>
            <Link
              href={itens.link}
              className=" text-white block px-4 py-2 text-2xl hover:bg-rose-400  text-left"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              {itens.nome}
            </Link>
            
          </div>
          ))}
        </div>
      )}
    </div>
  );
}