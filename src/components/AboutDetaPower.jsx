import BuildingBackground from '../assets/building.jpg';
import Security from '../assets/security.jpg';
import Advance from '../assets/advance.jpg';
import Environmental from '../assets/environment.jpg';
import Quality from '../assets/quality.jpg';
import Reputation from '../assets/reputation.jpg';
import Service from '../assets/service.jpg';

const AboutDetaPower = () => {
    return(
        <div className="-mt-10 w-full">
            <div className="relative w-full h-[40rem] flex flex-col justify-center items-center">
                <div className='absolute z-20 px-6 xl:px-25 3xl:px-65 4xl:px-85 flex flex-col justify-center items-start gap-6'>
                    <h1 className='font-bold text-4xl text-white max-w-xs leading-tight uppercase'>Fujian Deta Electric Co.,LTD. High-Tech Enterprises</h1>
                    <p className='font-normal text-md text-white leading-normal'>
                        Deta Electric has passed ISO9001:2008, CE, VOV certification, and its products are 
                        exported to more than 90 countries and regions in Europe, America, the Middle East, 
                        Africa, Asia, etc. The products are widely used in many fields such as agriculture, 
                        forestry, mining, farms, hospitals, Telecom systems, buildings, military (military 
                        industry), hotels, airports, etc.
                    </p>
                    <div className='grid grid-cols-3 justify-center items-center'>
                        <img src={Security} alt="security-image" className="w-25"/>
                        <img src={Advance} alt="security-image" className="w-25" />
                        <img src={Environmental} alt="security-image" className="w-25" />
                        <img src={Quality} alt="security-image" className="w-25" />
                        <img src={Reputation} alt="security-image" className="w-25" />
                        <img src={Service} alt="security-image" className="w-25" />
                    </div>
                </div>
                <div className='absolute w-full h-full bg-gradient-to-r from-primary to-primary/50'></div>
                <img src={BuildingBackground} alt="building-background" className='w-full h-full object-cover'/>
            </div>
        </div>
    )
}

export default AboutDetaPower;