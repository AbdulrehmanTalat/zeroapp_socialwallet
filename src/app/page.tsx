import Image from 'next/image'
import { Inter } from 'next/font/google'
import Wallet from '@/components/Wallet'

const inter = Inter({ subsets: ['latin'] })
const externalImage =
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80';
export default function Home() {
  return (
    <div>
      <section className="relative  bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundColor: `black` }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Instant Smart Wallets for your customers. 
                  </h1>
                  <p className="mt-4 text-lg text-white">
                    ZeroDev first encountered this problem when we were developing our WalletConnect integration and realized that we couldn’t sign into OpenSea until we deployed the wallet, which led to a lengthy discussion with many smart people in the 4337 ecosystem. Eventually, Ivo from Ambire came up with a great solution that turned into ERC-6492.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="pt-6 w-full md:w-12/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">Zero Dev</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Supercharge Web3 UX with
                      Account Abstraction.
                      ZeroDev will create an AA wallet for you using social accounts.
                    </p>
                    <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                      <Wallet></Wallet>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
