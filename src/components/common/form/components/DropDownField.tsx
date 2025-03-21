"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  error?: string;
  onSelect: (value: string) => void;
}

const DropDownField = ({ error, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select inquiry type");

  const options = [
    "Inquiry Type 1",
    "Inquiry Type 2",
    "Inquiry Type 3",
    "Inquiry Type 4",
    "Inquiry Type 5",
  ];

  return (
    <div className="w-full">
      <div className="relative">
        <div>
          <label
            htmlFor="dropDown"
            className="lg:h-[3.75vw] h-[54px] bg-[#1A3D5E] border8 w-full flex justify-between items-center lg:px-sp32 px-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <input
              id="dropDown"
              name="dropDown"
              type="text"
              readOnly
              value={selected}
              className="outline-none bg-transparent lg:text16 mtext16 w-full no-caret cursor-pointer"
            />
            <div
              className={`lg:size-sp20 size-5 lg:min-w-sp20 min-w-5 relative transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <Image
                fill
                alt="chevron"
                src="/images/icons/bright_teal_chevron.svg"
              />
            </div>
          </label>
          {error && <span className="error">{error}</span>}
        </div>
        {isOpen && (
          <div className="absolute w-full bg-[#01284F] border8   transition-all text-white lg:max-h-[16.5vw] overflow-auto">
            <ul className="border border-[#01284F] text-black border8 overflow-hidden ">
              {options.map((option) => (
                <li
                  key={option}
                  className="lg:px-sp32 px-8 hover:bg-[#08325d] transition-all duration-300  py-3 bg-[#01284F] [&:not(:last-child)]:border-b border-b-[#fff3] lg:text16 mtext16 cursor-pointer transition hover:bg-dark-navy text-white hover:text-white"
                  onClick={() => {
                    setSelected(option);
                    onSelect(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownField;
