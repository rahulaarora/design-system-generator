import { useSession, signIn, signOut } from "next-auth/react"

const LoginBtn = () => {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                <button onClick={() => signOut()} className="btn">Sign out</button>
            </>
        )
    }
    return (
        <>
            <button onClick={() => signIn("google")} className="btn">Sign in</button>
        </>
    )
}

export default LoginBtn;