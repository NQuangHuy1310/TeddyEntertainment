import { RiBearSmileLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { SocaialLinks } from '~/constants'

const Footer = () => {
  return (
    <div className="bg-Light">
      <footer className="mx-auto max-w-screen-wide px-8 py-3 md:px-12 md:py-4 lg:px-16 lg:py-6">
        <div className="flex flex-col gap-10 border-b-[1px] border-black pb-8 md:pb-14 lg:flex-row lg:pb-20">
          <div className="flex max-w-[54rem] flex-shrink-0 flex-col gap-6 text-base">
            <Link
              to="/"
              className="flex w-[6.5rem] cursor-pointer items-center gap-1 rounded-lg bg-LightPrimary px-4 py-3 text-white"
            >
              <RiBearSmileLine className="h-6 w-6" />
              <span className="font-semibold">Teddy</span>
            </Link>
            <div>
              <h5 className="text-lg font-bold">Địa chỉ</h5>
              <p className="block">
                Cao đẳng FPT Polyteachnic - P. Trịnh Văn Bô, Xuân Phương, Nam Từ Niêm, Hà Nội, Việt Nam
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold">Liên hệ</h5>
              <a href="tel:0352223905" className="underline">
                0352223905
              </a>
              <a href="mailto:huynq13102004@gmail.com" className="block underline">
                huynq13102004@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {SocaialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-LightPrimary p-3 text-white underline"
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h4></h4>
          </div>
          <div className="flex-1">
            <h4></h4>
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-6 pt-8 text-center md:flex-row">
          <p>© 2024 Teddy Entertainment. All rights reserved.</p>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-4">
            <Link to="/privacy-policy" className="text-nowrap text-sm underline">
              Chính sách bảo mật
            </Link>
            <Link to="/services" className="text-nowrap text-sm underline">
              Dịch vụ
            </Link>
            <Link to="/settings" className="text-nowrap text-sm underline">
              Cài đặt
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
