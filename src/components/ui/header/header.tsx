import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="container flex justify-between items-center">
                <h1 className="text-4xl">Logo</h1>
                <nav>
                    <ul className="gap-5 flex">
                        <li>
                            <Link href={"/"}>Accueil</Link>{" "}
                        </li>
                        <li>
                            <Link href={"/"}>Contact</Link>{" "}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
