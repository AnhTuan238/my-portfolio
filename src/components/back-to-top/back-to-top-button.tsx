"use client";

import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          className="z-99 fixed bottom-20 right-5 p-3 font-bold bg-white rounded-full border border-2 border-black cursor-pointer transition-all duration-300 hover:bg-primary hover:text-white hover:border-transparent lg:bottom-10 lg:right-10"
          onClick={scrollToTop}
        >
          <MdOutlineKeyboardDoubleArrowUp size={30} />
        </button>
      )}
    </>
  );
}

export default BackToTopButton;
