import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-white">

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image 
                alt="logo"
                width='48'
                height='48'
                className="mx-auto w-auto"
                src='/images/logo-chat-mate.svg'
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tighter text-[#0F1828]">Connect easily with your family and friends over countries</h2>
            </div>
            {/**AuthForm */}
        </div>
    )
}
