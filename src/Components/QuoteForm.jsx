import Input from './ui/Input';
import Select from './ui/Select';
import Button from './ui/Button';

function QuoteForm() {
    const freightTypes = ['Air Freight', 'Road Freight', 'Ocean Freight', 'Rail Freight'];

    return (
        <section className='flex justify-center items-center bg-[#0B1117] py-24'>
            <div className='w-[85%] h-[650px] bg-[#0F171F] flex'>
                <aside 
                    className='w-1/2 h-[650px] bg-cover bg-center'
                    style={{ backgroundImage: 'url(https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/engineer-worker-under-working-with-fork-lift-conta-YMC76W4.jpg)' }}
                />
                <aside className='w-1/2 h-[650px] bg-[#0F171F] flex flex-col justify-center px-16'>
                    <h4 className='text-red-500 font-[Manrope]'>QUOTATION</h4>
                    <h1 className='text-gray-300 text-[42pt]'>Moving the Way You Want</h1>
                    
                    <div className='flex justify-center py-10'>
                        <span>
                            <Input placeholder='Your name' />
                            <Input placeholder='Phone number' />
                            <Input placeholder='Departure city' />
                            <Input placeholder='Weight' />
                        </span>
                        <span>
                            <Input placeholder='Your email' />
                            <Select options={freightTypes} placeholder='Freight Type' />
                            <Input placeholder='Delivery city' />
                            <Input placeholder='Volume' />
                        </span>
                    </div>
                    
                    <Button variant='primary' className='px-20 hover:bg-[#CBC7B7] hover:text-[#272C32] hover:border-[#CBC7B7]'>
                        Get a Quote
                    </Button>
                </aside>
            </div>
        </section>
    );
}

export default QuoteForm;