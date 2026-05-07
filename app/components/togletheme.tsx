import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

const togletheme = () => {
  return (
    <div className="fixed w-full flex justify-end items-center p-6" style={{ zIndex: 16}}>
      <AnimatedThemeToggler />
    </div>
  )
}

export default togletheme