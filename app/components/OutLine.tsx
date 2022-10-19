import { ChevronDown, ChevronUp } from "lucide-react";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

interface OutLineItem {
  title: string;
  href: string;
  children?: OutLineItem[];
}

const mock_data = [
  {
    title: "Cases",
    href: "/cases",
    children: [
      {
        title: "Case 1",
        href: "/cases/1",
        children: [
          {
            title: "Case 1.1",
            href: "/cases/1/1",
          },
        ],
      },
      {
        title: "Case 2",
        href: "/cases/1",
      },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

// Recursively show outline list
const RecursiveList = ({ items }: { items: OutLineItem[] }) => {
  return (
    <ul className="text-[0.9em] list-none">
      {items.map((item) => (
        <li>
          <a href={item.href} className="no-underline">
            {item.title}
          </a>
          {item.children && <RecursiveList items={item.children} />}
        </li>
      ))}
    </ul>
  );
};

const OutLine = ({items}:{items: OutLineItem[]}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [springs, api] = useSpring(() => ({
    from: { width: 50, height: 50, left: -15, bottom: -15, borderRadius: 50 },
  }));
  const handleClick = () => {
    api.start({
      from: { width: 50, height: 50, left: -15, bottom: -15, borderRadius: 50 },
      to: {
        width: 200,
        height: 300,
        borderRadius: 5,
        left: 10,
        bottom: 10,
      },
      reverse: isOpen,
    });
    setIsOpen(!isOpen);
  };
  return (
    <animated.div
      style={{
        ...springs,
      }}
      className="bg-base-300 fixed overflow-y-scroll scrollbar-hide opacity-60 hover:opacity-100 transition duration-500 select-none cursor-pointer"
    >
      {/* Open Outline*/}
      {!isOpen && (
        <div
          className="relative top-[18px] left-[20px] rotate-45"
          onClick={handleClick}
        >
          <ChevronUp size={20} strokeWidth={5} />
        </div>
      )}
      {/* Close Outline*/}
      {isOpen && (
        <div
          className="fixed flex justify-end w-[200px] px-5 mt-2"
          onClick={handleClick}
        >
          <div className="rotate-45">
            <ChevronDown size={20} strokeWidth={5} />
          </div>
        </div>
      )}
      {/* Outline Items*/}
      {isOpen && <RecursiveList items={items} />}
    </animated.div>
  );
};

export default OutLine;
export type { OutLineItem };
