import Background from '../assets/images/Dog-Main.jpg'


function About() {
  return ( 
    <div 
    style= {{backgroundImage: `url(${ Background})`}}
     className='flex flex-row flex-shrink justify-center bg-cover bg-fixed '
     >
      </div>
  )
}

export default About