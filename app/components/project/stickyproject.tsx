"use client"
import Image from "next/image"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { IconBrandPython, IconBrandReact, IconBrandHtml5, IconBrandTailwind, IconBrandLaravel, IconBrandCss3, IconBrandPhp, IconBrandMysql } from "@tabler/icons-react"
import { SiPostgresql, SiWebauthn, SiOllama, SiCodeigniter, SiJquery} from 'react-icons/si'

const stickyproject = () => {
    const content = [
  {
    title: "Convert Document",
    icon: [ IconBrandPython, IconBrandReact, SiPostgresql, IconBrandTailwind, SiJquery ],
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Convert Document
      </div>
    ),
  },
  {
    title: "Formating By Ocr",
    icon: [IconBrandHtml5, IconBrandTailwind, SiJquery],
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Persewaan kost",
    icon: [IconBrandHtml5, IconBrandCss3, IconBrandPhp, IconBrandMysql ],
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Transaksi digital dengan passkey fingerprint",
    icon: [ IconBrandLaravel, IconBrandTailwind, SiWebauthn, SiPostgresql, SiJquery],
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "LLM",
    icon: [ SiCodeigniter, IconBrandTailwind, SiOllama, SiPostgresql, SiJquery],
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
  return (
      <StickyScroll content={content} />
  )
}

export default stickyproject