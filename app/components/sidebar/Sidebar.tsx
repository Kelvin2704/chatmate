import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

async function Sidebar({
    children
}: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser()
    return (
        <div className="h-full">
            <DesktopSidebar currentUser={currentUser!}/> 
            {/* currentUser! mean USer or null */}
            <MobileSidebar/>
            <main className="lg:pl-20 h-full">
                {children}
            </main>
        </div>
    )
}

export default Sidebar;