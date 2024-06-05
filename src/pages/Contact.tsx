
import Background from '../assets/images/Smile-dogs.jpg'


function Contact() {
    <article>
            <header>
                <h2 className='h-screen flex flex-shrink'>Cont</h2>
            </header>
            </article>;
    return (
        <div>
            
            <div 
        style= {{backgroundImage: `url(${ Background})`}}
         className='flex flex-row flex-shrink justify-center bg-cover bg-fixed '
         >
         <div className='flex place-items-center h-screen'>
            <h3 className='bg-black text-yellow-400 text-xl rounded bg-opacity-50 p-3 mt-10 font-semibold mb-10  '>Contact Us!
            
            </h3>
         </div>
         <div className='flex place-items-center h-screen'>
            <h3 className=' text-yellow-400 text-xl rounded bg-opacity-50 p-3 mt-10 font-semibold mb-10 bg-black '>Office-(470)-883-3334 Email-monkmonk2293@gmail.com
            
            </h3>
         </div>
        </div>
        </div>
        
      )
    }

export default Contact