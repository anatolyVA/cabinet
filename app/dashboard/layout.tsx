import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "./style.css";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container">
            <section className="grid_left_col">
                <SideBar />
            </section>
            <section className="grid_right_col">
                <Header />
                <main className="content">{children}</main>
            </section>
        </div>
    );
}