import Footer from './components/footer'
import './globals.css'

export const metadata = {
  title: 'Google Clone',
  description: 'Google Clone created with Nextjs 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        {children}
        <Footer />  
      </body>
    </html>
  )
}
