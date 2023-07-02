import { PropsWithChildren } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout(props: PropsWithChildren) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="container grow">{props.children}</div>
            <Footer />
        </div>
    );
}
