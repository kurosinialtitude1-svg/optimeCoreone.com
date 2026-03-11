import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Contact Us — OptimeCore Intelligence Platform',
  description: 'Get in touch with our team of industrial AI specialists. Schedule a demo, request a consultation, or ask us anything about OptimeCore.',
}

export { default } from './contact-client'
