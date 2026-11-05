import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sri Gayatri Cycle & Bike Automobiles",
  description: "Two wheeler bike and cycle spare parts sales.",
  icons: "/images/logo.png" ,
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><Navbar />{children}<Footer /></body></html>;
}
