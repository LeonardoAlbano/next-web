export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen flex items-center flex-col px-4">
      {children}
    </div>
  )
}
