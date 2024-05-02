import DataTable from '../components/DataTable'
import Background from '../assets/images/Dog-Main.jpg'


function DashBoard() {
  return (
    <div>
        <DataTable/>
        <div 
    style= {{backgroundImage: `url(${ Background})`}}
     className='flex flex-row flex-shrink justify-center bg-cover bg-fixed '
     >
      </div>
    </div>
  )
}


export default DashBoard