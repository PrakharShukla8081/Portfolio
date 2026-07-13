import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import CursorGlow from '@/components/CursorGlow'

export const metadata = {
  title: 'Prakhar Shukla — Backend Developer',
  description: 'Backend Developer building scalable APIs and data systems with Node.js, Express.js, MongoDB and Next.js.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CursorGlow />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}