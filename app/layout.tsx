import './global.css'
import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import SideBar from './components/SideBar';

const geologica = Geologica({subsets: ["cyrillic"]})

export const metadata: Metadata = {
    title: "Личный кабинет",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={geologica.className}>
                <main> {children}</main>
            </body>
        </html>
    );
}
