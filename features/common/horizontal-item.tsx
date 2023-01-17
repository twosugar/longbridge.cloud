const HorizontalItem = ({
  list,
  className,
}: {
  list: { title?: string; picture?: string; desc?: string }[]
  className: string
}) => {
  return (
    <div className={`${className}  space-y-5 lg:space-y-0 lg:space-x-10 flex flex-col lg:flex-row`}>
      {list.map((item, index) => {
        return (
          <div key={index} className="flex flex-col">
            {item?.picture && <img className="w-10 mb-3" src={item?.picture} alt="" />}
            {item?.title && <div className="mb-2 text-xl h-12 leading-6">{item?.title}</div>}
            {item?.desc && <div className=" text-base text-text_color_1_supplement">{item?.desc}</div>}
          </div>
        )
      })}
    </div>
  )
}
export default HorizontalItem