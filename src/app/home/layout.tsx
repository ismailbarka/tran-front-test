
import NavBar from "../../components/NavBar";
import '../global.css';
import Header from '../../components/Header';
import NavBarDown from '../../components/NavbarDown/NavBarDown'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

import "./page.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="root-layout">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="homeChildren">
        {children}
      </div>
      <div>
      <NavBarDown />
      </div>
    </div>
  );
}
