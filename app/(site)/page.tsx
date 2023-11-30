import Image from "next/image";
import AuthForm from "./components/AuthForm";
export default function Home() {
    return (
        <div className="flex flex-col md:flex-row min-h-full justify-center items-center py-12 sm:px-6 lg:px-8 bg-slate-50">
            <div className="hidden sm:flex flex-col justify-center max-h-full items-center sm:mx-auto sm:w-full sm:max-w-md ">
                <Image
                    alt="logo"
                    width={400}
                    height={150}
                    className="mx-auto min:w-auto"
                    src='/images/logo-chat-mate.svg'
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tighter text-[#0F1828]">Connect easily with your family and friends over countries</h2>
                {/* <Button /> */}
            </div>
            <div className="flex flex-col justify-center max-h-full items-center sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    alt="logo"
                    width={150}
                    height={150}
                    className="mx-auto min:w-auto"
                    src='/images/logo.png'
                />
                <AuthForm />
            </div>

        </div>
    )
}
