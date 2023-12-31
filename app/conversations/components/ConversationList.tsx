'use client'

import useConversation from "@/app/hooks/useConservation"
import { FullConversationType } from "@/app/types"
// import { Conversation } from "@prisma/client"
import { MdOutlineGroupAdd } from 'react-icons/md'
import { useRouter } from "next/navigation"
import { useState } from "react"
import ConversationBox from "./ConversationBox"

interface ConversationsListProps {
    initialItems: FullConversationType[]
}

const ConversationList: React.FC<ConversationsListProps> = ({
    initialItems
}) => {
    const [items, setItems] = useState(initialItems);
    const router = useRouter()
    const { isOpen, conversationId } = useConversation()
    return (
        <aside className={`fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        overflow-y-auto 
        border-r 
        border-gray-200 
        ${isOpen ? 'hidden' : 'block w-full left-0'}`}>
            <div className="px-5">
                <div className="flex justify-between items-center mb-4 pt-4">
                    <div className="text-2xl font-bold text-slate-800 py-4">
                        Messages
                    </div>
                    <div className="rounded-full p-2 bg-gray-100 text-slate-600 cursor-pointer hover:opacity-75 transition">
                        <MdOutlineGroupAdd size={20} />
                    </div>
                </div>
                {items.map((item) => (
                    <ConversationBox key={item.id} data={item}
                        selected={conversationId === item.id} />
                ))}

            </div>
        </aside>
    )
}

export default ConversationList