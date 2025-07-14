import Bootstrap from "@/components/libreries/Bootstrap";
import Toastify from "@/components/libreries/Toastify"
import "./globals.css";
import Header from "@/components/layout/Header";
import NextProgressBar from "@/components/libreries/NextProgressBar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/context/AuthContex";
import Providers from "@/redux/slice/Provider";


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body >
        <AuthProvider>
          <Providers>
        <NextProgressBar>
          <Header />
          {children}
          <Footer />
          <Bootstrap />
          <Toastify />
        </NextProgressBar>
        </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
