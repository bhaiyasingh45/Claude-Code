import StatusBar from './StatusBar'
import HeroHeader from './HeroHeader'
import LoginCard from './LoginCard'

export default function LoginScreen() {
  const handleGetOtp = (phoneNumber: string) => {
    console.log('Requesting OTP for', phoneNumber)
  }

  const handleSocialLogin = (provider: string) => {
    console.log('Continue with', provider)
  }

  const handleSkip = () => {
    console.log('Skipped login')
  }

  return (
    <div className="relative flex min-h-dvh w-full flex-col items-start bg-[#fcf9f5]">
      <StatusBar />
      <HeroHeader />
      <LoginCard onGetOtp={handleGetOtp} onSocialLogin={handleSocialLogin} onSkip={handleSkip} />
      <div className="h-[340px] w-full shrink-0" />
      <div className="flex h-[34px] w-full shrink-0 flex-col items-center justify-center">
        <div className="h-[5px] w-[134px] rounded-[2.5px] bg-[#261614] opacity-20" />
      </div>
    </div>
  )
}
