import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Heartlink - Find Your Match',
  description: 'Connect with people who share your interests',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
