import Navbar from "@/components/Navbar/Navbar";
import "@/app/globals.css";
import Main from "@/components/Main/Main";

export default function RootLayout({ children }) {
    return (
        <>
            <Main />
            {children}
        </>
    );
}