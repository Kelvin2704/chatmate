'use client'

import useConversation from "../hooks/useConservation"
import EmptyState from "../components/EmptyState"

const Home = () => {
    const { isOpen } = useConversation()
    return (
        <div className={`lg:pl-80 h-full lg:block ${isOpen ? 'block' : 'hidden'} `}>
            <EmptyState />
        </div>
    )
}

export default Home;