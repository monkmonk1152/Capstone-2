import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAuth0 } from '@auth0/auth0-react';
import { getAuth, signOut } from "firebase/auth";


function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    useAuth0();

  const logOut = () => {
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((_error) => {
  // An error happened.
});
  }

  

    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };

   

    

    


   

    return (
        <nav className='flex items-center justify-between flex-wrap bg-blue-700 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-bold text-xl text-yellow-500 tracking-tight'>Isla's Dog Daycare</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-teal-200 border rounded border-teal-400 hover:text-white hover:border-white'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
                <div className='w-full block flex-grow items-center'>
                    <div className="text-sm lg:flex-grow">
                        <Button className='p-3 m-5 bg-blue-700 justify-center'>
                            <div>
                                <Link to='/' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-yellow-400 hover:text-white mr-4'>
                                    Home
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 justify-center'>
                            <div>
                                <Link to='/about' onClick={ clicked} className='text-yellow-500 flex place-items-center mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4'>
                                    About
                                </Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5  justify-center">
                            <div>
                                <Link to='/contact' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 
                                text-yellow-500 hover:text-white mr-4'>
                                    Contact
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 justify-center'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-white mr-4'>
                                    Dashboard
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5  justify-center'>
                            <div>
                                <Link to='/services' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-white mr-4'>
                                    Services
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 justify-center'>
                            <div>
                                <p onClick={ logOut} className='text-yellow-500 flex place-items-center mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4'>
                                    Log-Out
                                </p>
                            </div>
                        </Button>
                        
                    </div>
                </div>
            ) : (
                <></>
            )}
        </nav>
    );
}

export default Navbar;