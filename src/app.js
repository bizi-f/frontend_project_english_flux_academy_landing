import Header from '@/layouts/Header/Header'
import Footer from '@/layouts/Footer/Footer'
import MobileEnrollBar from '@/layouts/MobileEnrollBar/MobileEnrollBar'

const App = (content, options = {}) => {
  const { showMobileEnrollBar = false } = options

  return `${Header()}<main class="content">${content}</main>${showMobileEnrollBar ? MobileEnrollBar() : ''}${Footer()}`
}

export default App