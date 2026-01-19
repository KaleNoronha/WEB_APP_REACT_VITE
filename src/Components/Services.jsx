import ServiceCard from './ui/ServiceCard';
import Button from './ui/Button';

const Services = () => {
    const services = [
        { icon: "https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/icon1-1.png", title: "Ocean Freight", offset: 40 },
        { icon: "https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/icon3-1.png", title: "Air Freight", offset: 20 },
        { icon: "https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/icon4-1.png", title: "Rail Freight", offset: 0 },
        { icon: "https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/icon5-1.png", title: "Worldwide Ships", offset: 40 },
        { icon: "https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/icon2-1.png", title: "Logistic Service", offset: 20 },
        { icon: "https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/icon6-1.png", title: "24/7 Full Support", offset: 0 }
    ];

    const description = "Maecenas eros lacus, suscipit facilisis quam non, consectetur sollicitudin magna quis tristique.";

    return (
        <section className='bg-[#0F171F] pt-16 pb-28 font-[Manrope]'>
            <div>
                <h5 className='text-red-500 absolute left-36'>OUR SERVICES</h5>
                <aside className='flex justify-around text-white items-center'>
                    <h1 className='w-1/2 text-[55pt] my-5 mr-5'>We Help Transport Your Future</h1>
                    <span><Button variant='outline'>contact us</Button></span>
                </aside>
            </div>

            <section className='flex text-gray-300 pt-10 w-[90%] mx-auto'>
                {services.slice(0, 3).map((service, index) => (
                    <ServiceCard key={index} {...service} description={description} />
                ))}
            </section>

            <aside className='flex text-gray-300 pt-10 w-[90%] mx-auto'>
                {services.slice(3).map((service, index) => (
                    <ServiceCard key={index} {...service} description={description} />
                ))}
            </aside>
        </section>
    );
};

export default Services;