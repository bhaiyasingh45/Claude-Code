import iceCreamBowl from '../assets/ice-cream-bowl.svg'

export default function HeroHeader() {
  return (
    <div className="flex h-80 flex-col items-start justify-end w-full p-7">
      <div className="flex w-full flex-col items-center gap-2 pb-9">
        <div className="flex size-16 items-center justify-center rounded-[32px] bg-[#e83e2c] shadow-[0px_8px_8px_rgba(232,62,44,0.25)]">
          <div className="flex size-8 items-center justify-center">
            <img alt="" className="size-[28.8px]" src={iceCreamBowl} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <p className="font-display font-extrabold text-[28px] text-[#d93d17]">
            FoodieExpress
          </p>
          <p className="font-sans font-semibold text-[12px] uppercase text-[#54453d] opacity-90">
            Hot • Fresh • On Time
          </p>
        </div>
      </div>
    </div>
  )
}
