//using async function because in future it will fetch database

import Sidebar from "../components/sidebar/Sidebar";

export default async function UsersLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <Sidebar>
            <div className="h-full">{children}</div>
        </Sidebar>
    )
}