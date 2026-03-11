import { FaTelegram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import Button from '../button/button'

const calls = [
  {
    icon: FaTelegram,
    title: 'Telegram',
    link: 'https://t.me/dorbinDev',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    link: 'https://wa.me/491758854353',
  },
  {
    icon: MdMailOutline,
    title: 'Email',
    link: 'https://mail.google.com/mail/?view=cm&to=kirillpavlov.dev@gmail.com',
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    link: 'https://github.com/dorbinDevFRLNCR',
  },
]

const mainCalls = calls.slice(0, 2)

const additionalCalls = calls.slice(2, 4)

function CallsGrid() {
  return (
    <div className="w-full mx-auto">
      <div className="grid items-center grid-cols-1 gap-2 md:grid-cols-2 gap-4">
        {mainCalls.map((call, index) => (
          <Button
            key={index}
            href={call.link}
            className="flex w-max mx-auto md:w-full"
            variant="primary"
          >
            <call.icon size={18} />
            <span className="ml-2">{call.title}</span>
          </Button>
        ))}
        {additionalCalls.map((call, index) => (
          <Button
            key={index}
            href={call.link}
            className="flex w-max mx-auto md:w-full"
            variant="secondary"
          >
            <call.icon size={18} />
            <span className="ml-2">{call.title}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default CallsGrid
