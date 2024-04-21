import { Link } from 'react-router-dom'
import Button from '~/components/ui/Button'
import routes from '~/config/routes'
import { navbar } from '~/constants'

import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="sticky left-0 right-0 top-0 z-50 border-b-[1px] border-LightPrimary bg-LightBase shadow-md">
      <div className="mx-auto flex h-headerHeight max-w-screen-wide items-center justify-between px-8 py-3 md:px-12 md:py-4 lg:px-16 lg:py-6">
        <div className="flex-shrink-0 text-xl font-bold text-Primary">Teddy</div>
        <nav className="hidden items-center gap-8 lg:flex">
          {navbar.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              target="_blank"
              className="text-base font-normal ease-in-out hover:opacity-80"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="ghost" size="small" to={routes.register}>
            Đăng ký
          </Button>
          <Button variant="gradient" size="small" to={routes.login}>
            Đăng nhập
          </Button>
        </div>

        <div className="block cursor-pointer lg:hidden">
          <FaBars className="text-xl" />
        </div>
      </div>
    </header>
  )
}

export default Header
