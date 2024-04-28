import { signIn } from "next-auth/react";
const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Design Brilliance Made Effortless!</h1>
                    <p className="mb-5">Unlock design brilliance effortlessly. Craft stunning design systems with precision and ease.</p>
                    <button className="btn btn-primary glass" onClick={() => {
                        signIn("google")
                    }}>Start Crafting</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;