
import ConnectingBankButton from "@/components/ConnectingBankButton"
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { useEffect, useState } from "react";

const UserRouting = () => {

const [user, setuser] = useState(null)

useEffect(() => {
    async function testing(){
        // console.log("testing")
        const loggedIn = await getLoggedInUser();
        setuser(loggedIn);
        }
        testing();
    }, [])


    return (
        // <div> hello</div>
        <ConnectingBankButton user={user}/>
    )
}

export default UserRouting