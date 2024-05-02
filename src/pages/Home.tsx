import Background from '../assets/images/Dog-Main.jpg'

function Home() {
  return (
    <div 
    style= {{backgroundImage: `url(${ Background})`}}
     className='flex flex-row flex-shrink justify-center bg-cover bg-fixed '
     >
     <div className='flex place-items-center h-screen'>
        <h3 className='p-7 bg-black text-white rounded bg-opacity-30  '> Welcome To Isla's Doggie Daycare!</h3>
     </div>
    </div>
  )
}

export default Home