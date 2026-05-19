import { MENU_ITEMS } from "@config/menu";
import { cn } from "@utils/cn";
import { motion } from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { LogoIcon } from "./icons/Logo";

export default function Topbar() {
  return (
    <header className="sticky top-0 backdrop-blur bg-white/85 z-10">
      <nav className="border-b">
        <div className="container justify-end py-2">
          <div className="flex flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link href="/#" passHref>
                <LogoIcon className="text-black h-10 w-20" />
              </Link>
            </motion.div>

            <div>
              <DesktopMenu />
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function DesktopMenu() {
  return (
    <ul
      className={cn(
        "hidden md:flex flex-col md:flex-row md:mb-0 md:justify-center md:items-center",
      )}
    >
      {MENU_ITEMS.map(({ label, href }) => (
        <li key={label}>
          <Link href={href} passHref>
            <span className="p-2 text-gray-700">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = useMemo(() => setShowMenu.bind(null, false), []);

  return (
    <div className="md:hidden">
      <button type="button" onClick={() => setShowMenu((value) => !value)}>
        Menu
      </button>
      <div
        className={cn(
          "fixed top-0 left-0 w-screen h-screen bg-white/85 z-11 overflow-x-hidden overflow-y-auto",
          !showMenu && "hidden",
        )}
        onClick={closeMenu}
      >
        {showMenu && (
          <ul
            className={cn(
              "flex flex-col mb-0 justify-center items-start mt-16",
            )}
          >
            {MENU_ITEMS.map(({ label, href }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl p-3 border-b-2 border-b-warning-700 bg-warning-100 hover:scale-x-120"
              >
                <Link href={href} passHref onClick={closeMenu}>
                  <span className="p-2 text-gray-700">{label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
