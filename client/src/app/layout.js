import "./globals.css";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import { cookies } from "next/headers";

export const metadata = {
  title: "Upload App",
  description: "Let's upload something! 🎉",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

