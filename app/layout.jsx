import '@styles/globals.css';

export const metadata = {
    title: "Portofolia",
    descriptiion: "Discover the wonderful world of NextJS"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
)
}

export default RootLayout;