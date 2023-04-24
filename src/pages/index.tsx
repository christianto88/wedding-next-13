import { Dialog, Transition } from '@headlessui/react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import framePic from 'public/assets/images/frame-foto-pengantin.png';
import imageBottom from 'public/assets/images/image-bottom.svg';
import imageTop from 'public/assets/images/image-top.svg';
import imageBottom2 from 'public/assets/images/image2-bottom.svg';
import imageTop2 from 'public/assets/images/image2-top.svg';
import bg from 'public/assets/images/index-bg.jpg';
import kezia from 'public/assets/images/kezia.jpeg';
import ring from 'public/assets/images/ring.svg';
import { Fragment, useState } from 'react';
import { InView } from 'react-intersection-observer';

const Index = () => {
  const [open, setOpen] = useState(true);
  const controls = useAnimation();

  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const sequence = async () => {
    await controls3.start('visible');
    await controls4.start('visible');
  };
  if (!open) {
    sequence();
  }

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity">
              <Image src={bg} alt="background image" fill></Image>
            </div>
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex items-center justify-center text-2xl">
                      <h2
                        style={{
                          color: '#9fa0a1',
                          textTransform: 'capitalize',
                        }}
                      >
                        Wedding Invitation
                      </h2>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        <Image src={framePic} alt="frame" />
                      </Dialog.Title>
                      <div className="mt-2">
                        <p
                          className="text-sm text-gray-500"
                          style={{ lineHeight: '30px' }}
                        >
                          With great joy, we are pleased to cordially invite you
                          to celebrate the marriage of
                          <br></br>
                          <span className="text-base font-bold text-black">
                            Christianto & Kezia
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <button
                      type="button"
                      style={{ letterSpacing: '3px' }}
                      className="inline-flex justify-center border border-transparent bg-gray-400 px-4 py-2 text-xs uppercase text-white shadow-sm focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Open Invitation
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* MAIN CONTENT */}
      <div>
        <div className="overflow-hidden text-sm md:text-xl">
          <div className="bg-foto flex  h-screen flex-col justify-center bg-cover bg-center text-center">
            <Image
              src={bg}
              alt="background image"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                zIndex: '-100',
              }}
            ></Image>
            <motion.div
              initial="hidden"
              animate={controls3}
              variants={{
                visible: {
                  x: 0,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2,
                    type: 'tween',
                    duration: 3,
                  },
                },
                hidden: { x: '100vw' },
              }}
              className="text-center  text-xl md:text-3xl"
            >
              <div
                style={{ letterSpacing: '0.5px' }}
                className=" mb-2 text-center text-white md:text-4xl"
              >
                The wedding of
              </div>
              <div className=" mb-2 text-center text-xl uppercase text-white md:text-4xl">
                Christianto & Kezia Christy
              </div>
              <div className="text-center text-sm text-white md:text-xl">
                18 • November • 2023
              </div>
              <motion.div
                className="mt-4"
                initial="hidden"
                animate={controls4}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: { type: 'tween', duration: 5 },
                  },
                  hidden: { opacity: 0 },
                }}
              >
                <FlipClockCountdown
                  style={{ justifyContent: 'center' }}
                  labelStyle={{ fontSize: 12, color: 'white' }}
                  digitBlockStyle={{
                    width: 20,
                    height: 20,
                    fontSize: 15,
                    backgroundColor: 'white',
                    color: 'black',
                  }}
                  dividerStyle={{ color: 'black', height: 0.5 }}
                  to={1700240400000}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* second section */}
        <div
          className="text-2xl md:text-2xl"
          style={{ background: 'rgb(250, 250, 250)' }}
        >
          <Image
            style={{
              zIndex: 1,
              objectFit: 'cover',
            }}
            width={100}
            src={imageTop}
            alt=""
          />

          <InView
            as="div"
            onChange={(inView, _entry) => {
              if (inView) {
                controls.start('visible');
              }
            }}
          >
            <motion.div
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 2 }}
            >
              <div
                style={{ letterSpacing: '0.5px' }}
                className=" mb-2 text-center text-2xl capitalize text-gray-500 md:text-4xl"
              >
                Meet The Couple
              </div>

              <div className="md: mt-8 flex flex-col justify-center gap-14 text-center md:flex-row ">
                <div className="flex flex-col">
                  <Image
                    src={kezia}
                    height={210}
                    width={210}
                    className="inline-block self-center rounded-md"
                    alt=""
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <br></br>
                  <div
                    style={{
                      color: 'rgb(159, 160, 161)',
                      letterSpacing: '3px',
                    }}
                    className=" text-2xl uppercase"
                  >
                    Christianto
                  </div>
                  <div
                    style={{ color: '#757575', letterSpacing: '1px' }}
                    className="text-xs"
                  >
                    First Son of <br></br>Mr. Hengky Foe & Mrs. Wong Jaw Pee
                  </div>
                </div>
                <div className="flex flex-col md:pt-32">
                  <h1 className="text-5xl"></h1>
                </div>
                <div className="flex flex-col">
                  <Image
                    height={210}
                    width={210}
                    className="inline-block self-center rounded-full"
                    src={kezia}
                    alt=""
                  />
                  <br></br>
                  <div
                    style={{
                      color: 'rgb(159, 160, 161)',
                      letterSpacing: '3px',
                    }}
                    className=" text-2xl uppercase"
                  >
                    Kezia Christy
                  </div>
                  <div
                    style={{ color: '#757575', letterSpacing: '1px' }}
                    className="px-4 text-xs"
                  >
                    First Daughter of<br></br> Mr. Budianto Agustjik & Mrs. Khoe
                    Ay Ling
                  </div>
                </div>
              </div>

              {/* <div className="flex justify-center mb-4">
                                    <h2 className="font-bold  text-2xl md:text-5xl">Protokol Covid-19</h2>
                                </div>
                                <div className="flex justify-center mb-4 ">
                                    <h4 className="text-center">Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi, kami harapkan kedatangan para tamu undangan agar menjalankan protokol yang berlaku.</h4>
                                </div>
                                <div className="flex justify-center">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center">
                                            <Image src="../images/distance.png"
                                                alt="Picture of the author"
                                                width={40}
                                                height={40}></Image>
                                            <span className="ml-2">Saling Menjaga Jarak di Dalam Acara</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Image src="../images/masker.png"
                                                alt="Picture of the author"
                                                width={40}
                                                height={40}
                                            ></Image>
                                            <span className="ml-2">Wajib Menggunakan Masker</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Image src="../images/namaste.png"
                                                alt="Picture of the author"
                                                width={40}
                                                height={40}
                                            ></Image>
                                            <span className="ml-2">Menggunakan Salam Namaste</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Image src="../images/wash.png"
                                                alt="Picture of the author"
                                                width={40}
                                                height={40}
                                            ></Image>
                                            <span className="ml-2">Mencuci Tangan dan Menggunakan Hand Sanitizer</span>
                                        </div>
                                    </div>
                                </div> */}
            </motion.div>
          </InView>
          <div className="flex">
            <Image
              style={{
                zIndex: 1,
                marginLeft: 'auto',
                objectFit: 'cover',
              }}
              width={100}
              alt=""
              src={imageBottom}
            />
          </div>
        </div>
        <motion.div
          variants={{ visible: { x: 0 }, hidden: { x: '100vw' } }}
          className="relative flex flex-col p-8"
          style={{ background: 'rgb(149, 150, 151)' }}
        >
          <Image
            src={imageBottom2}
            alt="bunga"
            width={100}
            style={{ position: 'absolute', left: 0, top: 0, opacity: 1 }}
          ></Image>
          <Image
            src={imageTop2}
            alt="bunga"
            width={100}
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              zIndex: 0,
              opacity: 1,
            }}
          ></Image>
          <div
            style={{ letterSpacing: '0.5px' }}
            className=" mb-2 text-center text-4xl capitalize text-white md:text-4xl"
          >
            The Wedding
          </div>

          <div className="text-center text-xl text-white">
            18 • November • 2023
          </div>
          <div
            id="frame"
            className="flex flex-col justify-evenly space-y-10 md:flex-row md:space-y-0"
          >
            <div className="mt-4 flex flex-col items-center space-y-8 border-4 border-white p-8 text-center text-white">
              <div>
                <Image
                  src={ring}
                  alt="ring"
                  // style={{ position: 'absolute', right: 0, bottom: 0, zIndex: 0 }}
                ></Image>
              </div>
              <div
                style={{ letterSpacing: '0.5px' }}
                className=" mb-2 text-center text-4xl capitalize text-white md:text-4xl"
              >
                Holy Matrimony
              </div>

              <div>
                Saturday, 11 November 2023 <br></br>09:00 <br></br>Gereja St
                Matia Rasul Kosambi
              </div>
              <div>
                <a href="https://www.google.com/maps/dir/-6.2062592,106.8531712/hotel+episode+gading+serpong/@-6.1883929,106.6131143,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e69fd94da2847cd:0xa1421103e3d49919!2m2!1d106.6202915!2d-6.2563993?hl=en-US">
                  <div className="mx-auto mt-2 flex w-max rounded-xl bg-white p-2 text-center">
                    {/* <div className="mr-2">
                                                <span style={{
                                                    fontFamily: 'Material Icons', fontSize: '18px'
                                                }}>place</span>
                                            </div> */}
                    {/* <div> */}
                    <span className="text-gray-500">Open Maps</span>
                    {/* </div> */}
                  </div>
                </a>
              </div>
            </div>
            {/* <div className="text-center space-y-5">
                                <h1 className=" font-bold text-xl md:text-4xl">Wedding Reception</h1>
                                <p>Saturday, 18 November 2023 <br></br>18:00 <br></br>Hotel Episode Gading Serpong</p>
                                <a href="https://www.google.com/maps/place/The+Apurva+Kempinski+Bali/@-8.8285465,115.2133893,17z/data=!3m1!4b1!4m8!3m7!1s0x2dd25cc0e01a2dfb:0x486d1b655b87ed9c!5m2!4m1!1i2!8m2!3d-8.8285465!4d115.2155844?hl=en-US">
                                    <div className="mx-auto mt-4 flex border-2 rounded-xl text-white w-max bg-green-700" style={{ padding: '10px 10px 5px 10px' }}>
                                        <div className="mr-2">
                                            <span style={{
                                                fontFamily: 'Material Icons', fontSize: '18px'
                                            }}>place</span>
                                        </div>
                                        <div>
                                            <span>Location</span>

                                        </div>
                                    </div>
                                </a>
                            </div> */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Index;
