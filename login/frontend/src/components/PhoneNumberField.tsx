import chevronDown from '../assets/chevron-down.svg'

type PhoneNumberFieldProps = {
  value: string
  onChange: (value: string) => void
}

export default function PhoneNumberField({ value, onChange }: PhoneNumberFieldProps) {
  return (
    <div className="flex h-[52px] w-full items-center gap-3 rounded-xl border-[1.5px] border-[#eae3dd] px-4">
      <button
        type="button"
        className="flex shrink-0 items-center gap-2"
        aria-label="Change country code"
      >
        <span className="flex h-3.5 w-5 shrink-0 flex-col overflow-hidden rounded-[1px]">
          <span className="h-[4.6px] w-5 bg-[#f93]" />
          <span className="h-[4.6px] w-5 bg-white" />
          <span className="h-[4.6px] w-5 bg-[#138808]" />
        </span>
        <span className="font-sans font-semibold text-[15px] text-[#261614]">+91</span>
        <img alt="" className="size-3" src={chevronDown} />
      </button>
      <span className="h-6 w-px shrink-0 bg-[#eae3dd]" aria-hidden="true" />
      <input
        type="tel"
        inputMode="numeric"
        placeholder="Enter mobile number"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-w-0 flex-1 font-sans text-[15px] text-[#261614] placeholder:text-[#7a6c6a] outline-none"
      />
    </div>
  )
}
