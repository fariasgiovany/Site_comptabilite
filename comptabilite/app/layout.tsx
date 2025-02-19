
import "./globals.css";
import Navbartop from "./components/Navbartop";
import Botton from "./components/Botton";
import Bottonmobile from "./components/Bottonmobile"




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <title>Comptabilité Contabilidade</title>
        <link rel="icon" href="/images/complogo.ico" type="image/x-icon"></link>
      </head>
      <body className="bg-slate-100">
      
      
        
        <Navbartop />

        
        {children}
        


        
        <div className="hidden lg:contents" >
          <Botton />
        </div>
        <div className="hidden max-lg:contents">
          <Bottonmobile />
        </div>
      </body>
    </html>
  );
}
