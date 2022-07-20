import ContactInfo from "./contact-info";

function Footer(props: any) {
    return (
        <footer>
            <section className={`w-full p-2 bg-gradient-to-r from-purple-500 to-slate-500 flex flex-col md:flex-row items-center justify-between`}>
                <ContactInfo className={`flex w-full md:w-2/6 lg:w-1/6 md:pl-2`}/>
                <span className={`text-white w-full md:w-1/6 md:pr-2 text-sm text-right`}>
                    <div>
                        Developed by:
                    </div>
                    <a href="https://github.com/TimurAztec">TimurAztec</a>
                </span>
            </section>
        </footer>
    )
}

export default Footer;