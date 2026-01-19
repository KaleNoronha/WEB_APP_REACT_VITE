import Button from './ui/Button';

function CallToAction() {
    return (
        <div className="w-full h-[580px] bg-[#0B1117]">
            <div 
                className="w-[95%] mx-auto h-[600px] bg-red-500 bg-cover bg-bottom flex"
                style={{ backgroundImage: 'url(https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/logobg3.png)' }}
            >
                <aside className="text-white w-[52%] p-10 px-20">
                    <h4 className="text-xl">GET STARTED</h4>
                    <h1 className="text-5xl my-8">Our Space, Your Way, Always</h1>
                    <p className="py-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <span className="flex gap-5">
                        <Button variant="outline">Get Started</Button>
                        <Button variant="dark">Our Services</Button>
                    </span>
                </aside>
                <img 
                    src="https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/M003T0845-B-Shipping-container2-1.png" 
                    alt="Container" 
                    className="h-[98.5%] w-[42%] relative -bottom-2"
                />
            </div>
        </div>
    );
}

export default CallToAction;