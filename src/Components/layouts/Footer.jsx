function Footer() {
    const footerLinks = {
        explore: ['Home', 'About', 'Services', 'Projects', 'Blog'],
        documents: ['Insurance Documents', 'Company Certificate', 'Transportation Permit', 'Annual Evaluation', 'Award Documents'],
        resources: ['Documentation', 'Privacy Policy', 'Press Files', 'FAQs', 'Contact'],
        social: ['Instagram', 'Linkedin', 'Telegram', 'Facebook', 'Youtube']
    };

    const contactInfo = [
        { icon: 'icon-[arcticons--mapsgeobookmarks]', text: '0811 Erdman Prairie, CA' },
        { icon: 'icon-[mingcute--phone-line]', text: '+1 (234) 567 890 00' },
        { icon: 'icon-[octicon--mail]', text: 'hauler.info@mail.com' }
    ];

    return (
        <footer className="bg-[#0B1117] text-gray-300 font-[Manrope] ">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-16">
                {/* Logo and Description - Centered */}
                <div className="flex flex-col items-center mb-16">
                    <img 
                        src="https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/logo_Asset-1.png" 
                        alt="Hauler Logo" 
                        className="w-48 mb-6"
                    />
                    <p className="text-center max-w-2xl text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis.
                    </p>
                </div>

                {/* Contact Cards - Centered */}
                <div className="flex justify-center gap-8 mb-20 flex-wrap">
                    {contactInfo.map((contact, index) => (
                        <a 
                            key={index}
                            href="#" 
                            className="flex items-center gap-4 bg-[#1a2530] hover:bg-[#1f2d3d] transition-colors px-12 py-6 min-w-[280px]"
                        >
                            <span className={`${contact.icon} text-red-500 text-3xl`} />
                            <span className="text-base">{contact.text}</span>
                        </a>
                    ))}
                </div>

                {/* Links Grid */}
                <div className="flex justify-center gap-24 py-16 border-t border-[#272C32]">
                    {Object.entries(footerLinks).map(([key, links]) => (
                        <div key={key}>
                            <h3 className="text-white font-semibold text-lg mb-8 capitalize">
                                {key === 'social' ? 'Follow us' : key}
                            </h3>
                            <ul className="space-y-4">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href="#" 
                                            className="text-base hover:text-red-500 transition-colors inline-block"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Section */}
            
            <div className='border-t border-[#272C32] flex justify-center'>
                <div className="flex justify-between max-w-7xl w-full items-center py-8">
                    <p style={{ fontFamily: 'var(--e-global-typography-text-font-family)' }}>Copyright © 2024 ASK Project</p>
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-base hover:text-red-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-base hover:text-red-500 transition-colors">Terms & Services</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;