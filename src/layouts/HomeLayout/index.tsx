import { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <header>Header here</header>
      <main>{children}</main>
      <footer>Footer here</footer>
    </div>
  )
}

export default HomeLayout
