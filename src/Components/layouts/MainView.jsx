import Services from '../Services';
import QuoteForm from '../QuoteForm';
import CallToAction from '../CallToAction';
import Features from '../Features';
import Home from '../../Page/Home';
import About from '../../Page/About';
import Service from '../../Page/Service';
import Page from '../../Page/Page';
import Contact from '../../Page/Contact';

function MainView({ currentSection }) {
    const renderContent = () => {
        switch (currentSection) {
            case 'home':
                return (
                    <>
                        <Home />
                        <Services />
                        <QuoteForm />
                        <CallToAction />
                        <Features />
                    </>
                );
            case 'about':
                return <About />;
            case 'service':
                return <Service />;
            case 'page':
                return <Page />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return <main>{renderContent()}</main>;
}

export default MainView;
