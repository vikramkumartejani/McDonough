import './App.css';
import Card from './assets/card.svg'
import GmailGroups from './assets/gmail-groups.svg'
import Language from './assets/language.svg'
import LocationImg from './assets/location.svg'
import MobileImg from './assets/mobile-friendly.svg'
import EmailImg from './assets/mail.svg'
import InstagramImg from './assets/Instagram.svg'

function App() {
  return (
    <div className='w-full max-w-[1440px] mx-auto'>
      <div className='px-3 sm:px-8  py-4 sm:py-14'>

        {/* Header */}
        <div className='flex items-start flex-col gap-5'>
          <h1 className='text-[40px] sm:text-[64px] font-bold text-black'>Next Level Nola</h1>
          <div className='flex items-center flex-wrap gap-3'>
            <div className='flex items-center gap-2'>
              <img src={GmailGroups} alt='gmail-groups' width={20} height={20} />
              <h3 className='text-[#1D1B20] text-base font-normal'>Years in business: 3</h3>
            </div>
            <div className='flex items-center gap-2'>
              <img src={Language} alt='Language' width={20} height={20} />
              <h3 className='text-black text-base font-normal'>Educational services</h3>
            </div>
          </div>
        </div>

        {/* Contact Info & Business Hours */}
        <div className='mt-2.5 flex lg:flex-row flex-col items-start gap-10 lg:gap-3'>
          <div>
            <img src={Card} alt='Card' width={1054} height={487} className='h-auto' />
          </div>
          <div className='max-w-[310px] w-full'>
            {/* Contact information */}
            <div>
              <h2 className='text-[#1D1B20] text-2xl font-bold'>Contact information</h2>
              <div className='flex flex-col items-start gap-2'>
                <div className='mt-4 flex items-center gap-6'>
                  <img src={LocationImg} alt='Location' width={20} height={20} />
                  <h4>Lorem ipsum dolor sit amet </h4>
                </div>
                <div className='flex items-center gap-6'>
                  <img src={MobileImg} alt='Location' width={20} height={20} />
                  <h4>Lorem ipsum dolor sit amet </h4>
                </div>
                <div className='flex items-center gap-6'>
                  <img src={EmailImg} alt='Location' width={20} height={20} />
                  <h4>Lorem ipsum dolor sit amet </h4>
                </div>
                <div className='flex items-center gap-6'>
                  <img src={InstagramImg} alt='Location' width={20} height={20} />
                  <h4>Lorem ipsum dolor sit amet </h4>
                </div>
              </div>
            </div>
            {/* Business hours */}
            <div className='mt-8'>
              <h2 className='text-[#1D1B20] text-2xl font-bold'>Business hours</h2>
              <div className='mt-4 flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-black text-base font-normal'>Monday</h3>
                  <h4 className='text-black text-base font-normal'>9:00 a.m.- 5:00 p.m.</h4>
                </div>
                <div className='flex items-center justify-between'>
                  <h3 className='text-black text-base font-normal'>Tuesday</h3>
                  <h4 className='text-black text-base font-normal'>9:00 a.m.- 5:00 p.m.</h4>
                </div>
                <div className='flex items-center justify-between'>
                  <h3 className='text-black text-base font-normal'>Wednesday</h3>
                  <h4 className='text-black text-base font-normal'>9:00 a.m.- 5:00 p.m.</h4>
                </div>
                <div className='flex items-center justify-between'>
                  <h3 className='text-black text-base font-normal'>Thursday</h3>
                  <h4 className='text-black text-base font-normal'>9:00 a.m.- 5:00 p.m.</h4>
                </div>
                <div className='flex items-center justify-between'>
                  <h3 className='text-black text-base font-normal'>Friday</h3>
                  <h4 className='text-black text-base font-normal'>9:00 a.m.- 5:00 p.m.</h4>
                </div>
              </div>
            </div>
            <button className='mt-8 bg-[#E8DEF8] w-[185px] h-[51px] rounded-[100px] text-[#1D192B] font-medium text-sm tracking-[0.1px]'>Visit our website</button>
          </div>
        </div>

        {/* Footer */}
        <div className='mt-10'>
          <p className='text-base sm:text-xl text-black font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus, quam id feugiat pulvinar, nisi risus blandit neque, non auctor nunc massa cursus massa. Nunc ac tortor ac enim suscipit gravida. Duis vulputate malesuada leo, ut aliquet dolor. Nunc egestas ullamcorper dapibus. Nam tempor feugiat cursus. Phasellus finibus metus id dui egestas cursus. Integer sapien purus, vehicula ut ipsum in, feugiat tincidunt sem. </p>
        </div>
      </div>
    </div>
  );
}

export default App;
