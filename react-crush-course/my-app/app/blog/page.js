import Link from "next/link";

export default function(){
    return(
        <main>
            <h1>Posts</h1>
            <Link href="/blog/post-1">Post-1</Link>
            <Link href="/blog/post-2">Post-2</Link>
        </main>
    )
}