
import Background from '../assets/images/dog-Stick.jpg'




function Services() {
  return (
    <div>
        
        <div 
    style= {{backgroundImage: `url(${ Background})`}}
     className='flex flex-row flex-shrink justify-center bg-cover bg-fixed '
     >
     <div className='flex place-items-center h-screen'>
        <h3 className='p-7 bg-black text-yellow-500 text-xl rounded bg-opacity-30  '>Daycare Supervision: Professional staff members oversee dogs throughout the day, ensuring safety and providing companionship.

Toy Enrichment: Dogs are provided with a variety of toys and play equipment to engage their minds and bodies, promoting mental stimulation and physical activity.

Grooming Services: Professional grooming services are available to keep dogs clean, comfortable, and looking their best. This may include baths, brushing, nail trimming, and ear cleaning.

Training Sessions: Certified trainers conduct training sessions to reinforce good behavior, obedience, and socialization skills. This can include basic commands, leash manners, and group play etiquette.

Nutritious Meals: High-quality meals are provided to ensure dogs receive balanced nutrition during their stay. Meals are tailored to meet individual dietary needs and preferences.

Treats and Snacks: Healthy treats and snacks are offered throughout the day as rewards for good behavior or simply as a special treat. These treats may include dental chews, training treats, or frozen treats for hot days.

Overall, the dog day care aims to provide a safe, engaging, and nurturing environment where dogs can socialize, play, learn, and receive the care they need to thrive.

Please contact the office for prices and other needs!
 </h3>
     </div>
    </div>
    </div>
  )
}





export default Services