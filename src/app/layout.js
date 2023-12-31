import '../../assets/css/globals.css';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '400', '500', '700']})

export const metadata = {
  title: 'Dashboard Management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={ubuntu.className}>
          {children}
      </body>
    </html>
  )
}
