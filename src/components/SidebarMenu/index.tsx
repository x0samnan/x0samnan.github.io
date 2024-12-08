import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import CustomLink from './Link';

import { NAV_ITEMS } from '@/data';

import { menuSlide } from '@/shared/utils/animations';

interface Props {
  close: () => void;
}


const Index: FC<Props> = ({ close }) => {
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    close();
  };
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed right-0 top-0 z-[4000] h-screen w-[32vw] bg-gray-1 pb-[8vw] pl-[8vw] pr-[6vw] pt-[10vw] text-text-1"
      >
        <div className='w-full border-b border-white/20 uppercase text-white/60 pb-[0.4vw] mb-[2.2vw] '>
          <h3 className='text-[0.9vw] md:text-[2vw] leading-[1.1]'></h3>
        </div>
        <div className='flex flex-col h-full justify-between'>

          <div className="flex flex-col justify-end space-y-[0.1vw]" onMouseLeave={() => setSelectedIndicator(null)}>
            {NAV_ITEMS.map((item, index) => (
              <CustomLink
                handleClick={() => smoothScroll(item.href)}
                key={item.title}
                data={{ ...item, index }}
                isActive={selectedIndicator === item.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            ))}
          </div>

          <Link
            target="_blank"
            rel="noreferrer"
            href="https://calendly.com/samnans/15min"
            className='flex items-center justify-center bg-zinc-600 active:bg-zinc-700 transition hover:bg-zinc-700/60 px-[0.6vw] py-[0.6vw] rounded-sm gap-[0.6vw] w-full'
          >
            
            <p className='text-[1vw] font-medium tracking-wide'>Book a Call</p>
          </Link>
        </div>


      </motion.div>
      <div
        aria-label="button"
        onClick={close}
        className="fixed bottom-0 left-0 right-0 top-0 z-[750] bg-bg-1/60 transition"
      ></div>
    </>
  );
};
export default Index;
