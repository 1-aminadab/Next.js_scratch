import Link from "next/link";
import { useRouter } from "next/router"
function profile() {
    const router = useRouter();
    const {userName} = router.query
    console.log(router.query);
  return (
    <div>
         <h1>hello {userName}</h1>
        <Link href="/about">About</Link>
    </div>
   
  )
}

export default profile