import SocialLink from '../ui/SocialLink';
import Button from '../ui/Button';
import { NavLink } from 'react-router';

function Header() {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Service', path: '/service' },
        { name: 'Page', path: '/page' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header className='bg-[#0B1117] w-full h-[100px]'>
            {/* Top Bar */}
            <div className='flex items-center justify-center gap-[50%] py-1 border-b border-[#32373D] text-white'>
                <div className='flex items-center justify-center gap-4 my-2 font-[Manrope] text-[10pt] text-[#CBC7B7]'>
                    <a href="#" className='flex items-center gap-1'>
                        <span className="icon-[arcticons--mapsgeobookmarks] text-red-500" />
                        034 Erling Knolls, Dakota 8902
                    </a>
                    <a href="#" className='flex items-center gap-1'>
                        <span className="icon-[octicon--mail] text-red-500" />
                        hauler.info@mail.com
                    </a>
                </div>
                <div className='flex items-center justify-center gap-4 my-2'>
                    <SocialLink icon="icon-[bxl--facebook]" />
                    <SocialLink icon="icon-[ci--twitter]" />
                    <SocialLink icon="icon-[uil--youtube]" />
                    <SocialLink icon="icon-[akar-icons--linkedin-v2-fill]" />
                </div>
            </div>

            {/* Main Navigation */}
            <div className='pt-5'>
                <div className='flex justify-center items-center'>
                    <div className='w-1/4 flex items-center justify-center'>
                        <img src="https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/logo_Asset-1.png" alt="Logo" className='w-1/4 h-1/4' />
                    </div>
                    <nav className='w-1/2 flex justify-center items-center text-[#768D8D] font-[Michroma]'>
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => 
                                    `mx-8 hover:text-red-500 transition-colors ${
                                        isActive ? 'text-red-500' : ''
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                    <div className='w-1/4 flex justify-center items-center'>
                        <Button variant='primary'>Get Started</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
