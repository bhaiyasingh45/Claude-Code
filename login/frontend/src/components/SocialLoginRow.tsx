import iconGoogle from '../assets/icon-google.svg'
import iconApple from '../assets/icon-apple.svg'
import iconFacebook from '../assets/icon-facebook.svg'

const SOCIAL_PROVIDERS = [
  { name: 'Google', icon: iconGoogle },
  { name: 'Apple', icon: iconApple },
  { name: 'Facebook', icon: iconFacebook },
]

type SocialLoginRowProps = {
  onSelect: (provider: string) => void
}

export default function SocialLoginRow({ onSelect }: SocialLoginRowProps) {
  return (
    <div className="flex w-full items-start justify-center gap-4">
      {SOCIAL_PROVIDERS.map(({ name, icon }) => (
        <button
          key={name}
          type="button"
          onClick={() => onSelect(name)}
          aria-label={`Continue with ${name}`}
          className="flex size-[52px] items-center justify-center rounded-[26px] border border-[#eae3dd] bg-white"
        >
          <img alt="" className="size-6" src={icon} />
        </button>
      ))}
    </div>
  )
}
