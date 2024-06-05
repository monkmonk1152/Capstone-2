import DataTable from '../components/DataTable'
import Background from '../assets/images/Dogs-Creek.jpg'


function DashBoard() {
  return (
    <div>
        <DataTable/>
        <div 
    style= {{backgroundImage: `url(${ Background})`}}
     className='flex flex-row flex-shrink justify-center bg-cover bg-fixed '
     >
     <div className='flex place-items-center h-screen'>
        <h3 className='p-5 bg-black text-yellow-300 text-xl rounded bg-opacity-30  '>Here you can keep Contacts of your Trainers, Groomers and other Doggie Parents!</h3>
     </div>
    </div>
    </div>
  )
}


export default DashBoard