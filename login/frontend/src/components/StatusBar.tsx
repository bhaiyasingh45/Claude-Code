import iosSignal from '../assets/ios-signal.svg'
import iosWifiSignal from '../assets/ios-wifi-signal.svg'
import iosBatteryFull from '../assets/ios-battery-full.svg'

export default function StatusBar() {
  return (
    <div className="absolute flex h-11 items-center justify-between left-0 px-6 right-0 top-0">
      <p className="font-sans font-semibold text-[14px] text-[#212121]">9:41</p>
      <div className="flex items-center gap-1.5">
        <img alt="" className="size-5" src={iosSignal} />
        <img alt="" className="size-5" src={iosWifiSignal} />
        <img alt="" className="h-5 w-7" src={iosBatteryFull} />
      </div>
    </div>
  )
}
