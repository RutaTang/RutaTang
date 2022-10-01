import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface OutLineItem {
  title: string;
  href: string;
}

const OutLine = ({ items }: { items: Array<OutLineItem> }) => {
  const [showOutline, setShowOutline] = useState(false);
  return (
    <div className="fixed bottom-[5%] right-[2%] flex flex-col items-center w-[20%] invisible md:visible">
      {showOutline && (
        <div className="opacity-50 hover:opacity-100 transition-opacity w-full">
          <ul className="list-none text-base">
            {items.map((item) => {
              return (
                <li key={item.title+item.href}>
                  <a href={item.href}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div
        className="bg-secondary p-3 rounded-full cursor-pointer select-none text-white"
        onClick={() => {
          setShowOutline((p) => !p);
        }}
      >
        {!showOutline ? <ChevronUp size={25} /> : <ChevronDown size={25} />}
      </div>
    </div>
  );
};

export default OutLine;
export type { OutLineItem };
