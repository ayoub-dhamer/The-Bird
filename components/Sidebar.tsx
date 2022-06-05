import React from "react";
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/outline'
import SidebarRow from "./SidebarRow";
import { signIn, signOut, useSession } from "next-auth/react";

function Sidebar(){
    const {data: session} = useSession()

    return(
        <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
            <img className=" m-3 h-10 w-10" src="https://links.papareact.com/drq" alt="" />
            <SidebarRow Icon={HomeIcon} title="Home" onClick={function (): {} {
                throw new Error("Function not implemented.");
            } } />
            <SidebarRow Icon={HashtagIcon} title="Explore" onClick={function (): {} {
                throw new Error("Function not implemented.");
            } } />
            <SidebarRow Icon={BellIcon} title="Notifications" onClick={function (): {} {
                throw new Error("Function not implemented.");
            } } />
            <SidebarRow Icon={MailIcon} title="Messages" onClick={function (): {} {
                throw new Error("Function not implemented.");
            } } />
            <SidebarRow Icon={BookmarkIcon} title="BookMarks" onClick={function (): {} {
                throw new Error("Function not implemented.");
            } } />
            <SidebarRow Icon={CollectionIcon} title="Lists" onClick={function (): {} {
                throw new Error("Function not implemented.");
            } } />
            <SidebarRow Icon={UserIcon} onClick={session ? signOut : signIn} title={session ? 'sign Out' : 'Sign In'} />
            <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" onClick={function (): {} {
                throw new Error("Function not implemented.");
            } } />
        </div>
    );
}

export default Sidebar