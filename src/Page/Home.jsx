import Button from '../Components/ui/Button';
import StatCard from '../Components/ui/StatCard';

function Home() {
    const stats = [
        { value: '25+', label: 'Years of Experience' },
        { value: '950+', label: 'Satisfied Clients' },
        { value: '30M+', label: 'Shipments Delivered' }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className='bg-[#0B1117]'>
                <div className='flex items-center justify-center'>
                    <aside className='w-[31%]'>
                        <div>
                            <p className='text-red-500 text-base'>Welcome to Hauler</p>
                            <h1 className='text-white text-5xl my-4'>Get Your Load to Market Faster</h1>
                            <p className='text-white text-justify text-sm ml-2 mr-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        </div>
                        <div className='flex gap-4 mt-5'>
                            <Button variant='outline'>Get Started</Button>
                            <Button variant='secondary'>Our services</Button>
                        </div>
                    </aside>
                    <aside className='relative top-8 w-1/2 ml-10'>
                        <img src="https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/Shipping-Container-1.png" alt="Container" />
                    </aside>
                </div>

                {/* Stats Section */}
                <div className='flex items-center justify-center -mt-4'>
                    <div 
                        className='bg-cover bg-center w-[84%] h-[500px] flex items-end'
                        style={{ backgroundImage: 'url(https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/aerial-view-of-container-cargo-ship-with-container-4J6QDD9.jpg)' }}
                    >
                        <div className='flex bg-red-500 h-[30%] w-4/5 items-center justify-around px-8'>
                            {stats.map((stat, index) => (
                                <StatCard key={index} {...stat} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className='bg-[#0B1117]'>
                <div className='flex items-center justify-center'>
                    <div className='w-4/5 flex items-center justify-between mt-24 pb-16'>
                        <aside 
                            className='bg-cover bg-center w-[45%] h-[660px] flex flex-col justify-end'
                            style={{ backgroundImage: 'url(https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/cargo-ship-from-top-ABHTWX7.jpg)' }}
                        >
                            <div className='w-full'>
                                <img 
                                    src="https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/M003T0845-B-Shipping-container.png" 
                                    alt="Container" 
                                    className='w-[65%] -ml-5 -mb-24'
                                />
                            </div>
                        </aside>

                        <aside className='w-1/2 text-white pl-5'>
                            <div className='space-y-12'>
                                <div>
                                    <h6 className='text-red-500 text-sm'>ABOUT HAULER</h6>
                                    <h1 className='text-5xl my-4'>Logistics Beyond Expectation</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>

                                <div className='flex'>
                                    <figure className='border-r border-[#32373D] mr-10 pr-3'>
                                        <span className="icon-[ph--eye-thin] text-red-500 text-4xl mb-3 block" />
                                        <figcaption>
                                            <h2 className='text-xl mb-2'>Our vision</h2>
                                            <p className='text-sm'>Proin vitae consectetur risus. Vestibulum in diam ac ligula auctor vulputate.</p>
                                        </figcaption>
                                    </figure>

                                    <figure>
                                        <span className="icon-[emojione-v1--white-pennant] text-red-500 text-4xl mb-3 block" />
                                        <figcaption>
                                            <h2 className='text-xl mb-2'>Our Mission</h2>
                                            <p className='text-sm'>Morbi vitae urna et sem varius luctus. Integer fermentum imperdiet augue.</p>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div>
                                    <Button variant='outline'>Learn more</Button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
