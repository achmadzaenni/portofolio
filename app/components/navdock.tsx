import { FloatingDock } from '@/components/ui/floating-dock'
import {
  IconExclamationCircle,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
const navdock = () => {
    const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
 
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "./project",
    },
    {
      title: "About me",
      icon: (
        <IconExclamationCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "./about",
    }
  ];
  return (
    <div className="fixed flex items-end justify-center w-full h-full bottom-6" style={{ zIndex: 15 }}>
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}

export default navdock