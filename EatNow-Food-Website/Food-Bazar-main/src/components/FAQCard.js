import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export function FAQCard({ item, handleActiveCard, id, open }) {
  const { title, description } = item;

  if (!title || !description) return;

  return (
    <div>
      <div
        onClick={() => handleActiveCard(id)}
        className="flex cursor-pointer flex-col gap-3 mb-4"
      >
        <div className="flex  items-center justify-between">
          <h4 className="text-gray-600 hover:text-orange-500 xs:text-sm">
            {title}
          </h4>
          {open === id ? (
            <MdKeyboardArrowUp size={30} />
          ) : (
            <MdKeyboardArrowDown size={30} />
          )}
        </div>
        {open === id && (
          <p className="text-light text-sm text-gray-600 xs:text-xs">
            {description}
          </p>
        )}
      </div>
      <div className="w-full border-t-[1px] border-gray-300"></div>
    </div>
  );
}
