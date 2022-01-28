import imgEquilibrium from './img/image-equilibrium.jpg';
import imgAvatar from './img/image-avatar.png';

function App() {
  return (
    <main className="flex h-screen bg-vdbmain justify-center items-center">
      <section class="w-80 bg-vdbcard rounded-3xl p-6 pb-7 space-y-5">
        <div className="relative group rounded-xl overflow-hidden">
          <div className="hidden group-hover:flex cursor-pointer duration-300 absolute items-center justify-center top-0 left-0 w-full h-full bg-femcyan/50 ">
            <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h48v48H0z" />
                <path
                  d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                  fill="#FFF"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
          <img src={imgEquilibrium} alt="Equilibrium NFT" />
        </div>

        <h1 class="font-outfit font-semibold text-white text-2xl cursor-pointer hover:text-femcyan">
          Equilibrium #3429
        </h1>
        <h2 class="font-outfit font-normal text-femsoftblue">
          Our Equilibrium collection promotes balance and calm.
        </h2>
        <div className="flex font-outfit font-light justify-between">
          <div className="flex space-x-2 items-center text-femcyan">
            {/* icon ethereum */}
            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            <div>0.041 ETH</div>
          </div>
          <div className="flex space-x-2 items-center text-femsoftblue">
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>
            <div>3 days left</div>
          </div>
        </div>

        <hr className="border border-vdbline" />

        <div className="flex items-center space-x-3 text-femsoftblue">
          <img
            className="w-10 h10 rounded-full border border-white"
            src={imgAvatar}
            alt="Avatar of Jules Wyvern"
          />
          <div>
            Creation of{' '}
            <button className="text-white hover:text-femcyan">
              Jules Wyvern
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
