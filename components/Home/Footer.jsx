import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
                <p>Developed by <Link href={"https://www.linkedin.com/in/rahularora2089/"} target="_blank" className="link">Rahul Arora</Link>.</p>
            </aside>
        </footer>
    );
}

export default Footer;