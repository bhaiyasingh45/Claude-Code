import { useState } from 'react'
import PhoneNumberField from './PhoneNumberField'
import SocialLoginRow from './SocialLoginRow'

type LoginCardProps = {
  onGetOtp: (phoneNumber: string) => void
  onSocialLogin: (provider: string) => void
  onSkip: () => void
}

export default function LoginCard({ onGetOtp, onSocialLogin, onSkip }: LoginCardProps) {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleGetOtp = () => {
    if (phoneNumber.trim().length === 0) return
    onGetOtp(phoneNumber)
  }

  return (
    <div className="absolute left-0 right-0 top-[280px] flex flex-col items-start gap-6 rounded-t-[32px] bg-white px-6 pb-10 pt-8">
      <div className="flex w-full flex-col items-start gap-1.5">
        <p className="w-full font-display font-bold text-[22px] text-[#261614]">
          Savor the flavors you love
        </p>
        <p className="w-full font-sans text-[14px] leading-[1.4] text-[#7a6c6a]">
          Login or sign up to order delicious food instantly.
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-4">
        <PhoneNumberField value={phoneNumber} onChange={setPhoneNumber} />
        <button
          type="button"
          onClick={handleGetOtp}
          className="flex h-[52px] w-full items-center justify-center rounded-xl bg-[#e83e2c] shadow-[0px_8px_8px_rgba(232,62,44,0.13)] transition-opacity active:opacity-90"
        >
          <span className="font-sans font-bold text-[16px] text-white">Get OTP</span>
        </button>
      </div>

      <div className="flex w-full items-center gap-3">
        <span className="h-px flex-1 bg-[#eae3dd]" />
        <p className="font-sans font-medium text-[12px] lowercase text-[#7a6c6a]">
          or continue with
        </p>
        <span className="h-px flex-1 bg-[#eae3dd]" />
      </div>

      <SocialLoginRow onSelect={onSocialLogin} />

      <div className="flex w-full items-start justify-center pt-2">
        <button
          type="button"
          onClick={onSkip}
          className="font-sans font-semibold text-[14px] text-[#e83e2c] underline"
        >
          Skip for now
        </button>
      </div>

      <div className="flex w-full flex-col items-center pt-4">
        <p className="w-full text-center font-sans text-[11px] leading-[1.4] text-[#7a6c6a]">
          By continuing, you agree to our{' '}
          <a href="#" className="font-semibold text-[#261614] underline">
            Terms of Service
          </a>{' '}
          &{' '}
          <a href="#" className="font-semibold text-[#261614] underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}
