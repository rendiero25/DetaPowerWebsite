import { motion } from 'framer-motion';

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
            <div className="relative w-full h-[40rem] sm:h-[35rem] 3xl:h-[42rem] flex flex-col justify-center items-start">
                <div className='absolute z-20 px-6 xl:px-25 3xl:px-85 4xl:px-85 flex flex-col justify-center items-start gap-6'>
                    <h1 className='font-bold text-4xl xl:text-5xl text-white max-w-xs sm:max-w-xl xl:max-w-3xl leading-tight uppercase'>Fujian Deta Electric Co.,LTD. High-Tech Enterprises</h1>
                    <p className='font-normal text-md text-white leading-normal xl:max-w-3xl'>
                        Deta Electric has passed ISO9001:2008, CE, VOV certification, and its products are 
                        exported to more than 90 countries and regions in Europe, America, the Middle East, 
                        Africa, Asia, etc. The products are widely used in many fields such as agriculture, 
                        forestry, mining, farms, hospitals, Telecom systems, buildings, military (military 
                        industry), hotels, airports, etc.
                    </p>
                    <div className='sixblock grid grid-cols-3 gap-2 justify-center items-center'>
                        <motion.img 
                            src={Security} 
                            alt="security-image" 
                            className="w-25 sm:w-40 xl:w-43"
                            initial={{ opacity: 0, scale: 2 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.3, scale: { type: 'spring', bounce: 0.7 } }}
                        />

                        <motion.img 
                            src={Advance}
                            alt='advance-image'
                            className="w-25 sm:w-40 xl:w-43"
                            initial={{ opacity: 0, scale: 2 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.3, scale: { type: 'spring', bounce: 0.7 } }}
                        />

                        <motion.img 
                            src={Environmental}
                            alt='environmental-image'
                            className="w-25 sm:w-40 xl:w-43"
                            initial={{ opacity: 0, scale: 2 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.3, scale: { type: 'spring', bounce: 0.7 } }}
                        />

                        <motion.img 
                            src={Quality} 
                            alt="quality-image" 
                            className="w-25 sm:w-40 xl:w-43"
                            initial={{ opacity: 0, scale: 2 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.3, scale: { type: 'spring', bounce: 0.7 } }}
                        />

                        <motion.img 
                            src={Reputation}
                            alt='reputation-image'
                            className="w-25 sm:w-40 xl:w-43"
                            initial={{ opacity: 0, scale: 2 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.3, scale: { type: 'spring', bounce: 0.7 } }}
                        />

                        <motion.img 
                            src={Service}
                            alt='service-image'
                            className="w-25 sm:w-40 xl:w-43"
                            initial={{ opacity: 0, scale: 2 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.3, scale: { type: 'spring', bounce: 0.7 } }}
                        />
                    </div>
                </div>
                <div className='absolute w-full h-full bg-gradient-to-r from-primary via-primary/90 to-white/70'></div>
                <img src={BuildingBackground} alt="building-background" className='w-full h-full object-cover'/>
            </div>
        </div>
    )
}

export default AboutDetaPower;