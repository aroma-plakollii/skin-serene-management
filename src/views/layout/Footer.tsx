export const Footer = () => {

    let date = new Date();
    return (
        <footer className="relative bg-neutral-900 pt-4 pb-5">
            <div className="container px-4">
                <div className="flex flex-wrap items-center">
                <div className="w-full md:w-4/12 px-4 test-left">
                    <div className="text-sm text-white font-semibold py-1">
                    Copyright © <span>{date.getFullYear()}</span><a href="https://www.creative-tim.com/product/notus-js" className="text-white-500 hover:text-purple-800" target="_blank"> Skin Serene. </a>
                    <span> All rights reserved</span>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}