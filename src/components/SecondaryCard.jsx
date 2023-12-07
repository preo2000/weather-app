import React, { Fragment} from "react";

const SecondaryCard = ({ Icon, title, content, onClick}) => {
  return (
    <>
      <div onClick={onClick} className="px-5 py-6 w-[100%] min-h-[100%] bg-slate-200/60 rounded-xl grid grid-cols-12">
        <div className="col-span-12 flex items-center h-[20%]">
          <Icon className="font-bold mr-2 text-black xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl" />
          <p className="font-bold text-black xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">{title}</p>
        </div>
        <div className="col-span-12">
          {content}
        </div>
      </div>
    </>
  )
}

export default SecondaryCard;