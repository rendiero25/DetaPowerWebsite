import TowerImage from '../assets/tower.jpg';
import DetaPowerTranparent from '../assets/detapowertransp.png';

const ChooseDetaElec = () => {
    return(
        <div 
            className="flex flex-col xl:flex-row justify-between items-center w-full xl:h-[35rem] -mt-10">
                <div 
                    className='w-full xl:w-1/2 h-full' 
                    style={{ backgroundImage: `url(${TowerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <img src={DetaPowerTranparent} alt="detapowertransparent-image" className='bg-black/80 h-full w-full'/>
                </div>
            
            
                <div className='w-full xl:w-1/2 h-full px-6 xl:px-18 py-12 flex flex-col justify-center items-start gap-6 bg-primary'>
                    <h1 className='font-bold text-4xl xl:text-5xl text-white uppercase'>
                        Choose Deta Electric
                    </h1>

                    <p className='font-bold text-3xl text-white leading-tight max-w-lg'>Provide comprehensive and 
                        professional power system solutions!</p>
                    <p className='font-normal text-md text-white leading-normal max-w-lg'>Deta Electric is committed 
                        to the research, manufacture and maintenance of generator sets and power systems, 
                        providing comprehensive, professional, large-scale and systematic power system 
                        solutions. Deta Electric has absorbed the world's advanced generator set design and 
                        manufacturing technology and advanced processing technology advantages.</p>

                    <a href="#" className='px-14 py-3 bg-tertiary text-white'>View More &gt;</a>
                </div>
        </div>
    )
}

export default ChooseDetaElec;