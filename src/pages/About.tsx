import Background from '../assets/images/Night-Dog.jpg';

function About() {
  return (
    <div>
      <div 
        style={{backgroundImage: `url(${Background})`}}
        className='flex flex-row flex-shrink justify-center bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          
          <h3 className='bg-gray text-yellow-500 text-xl rounded bg-opacity-10 p-3 font-semibold'>
            Christopher, the compassionate owner of a bustling dog daycare, pours his heart and soul into providing top-tier care for beloved canine companions.
             With a deep love for animals and an unwavering dedication to his craft, Chris embodies kindness, diligence, and a genuine affection for every furry friend
              that crosses his path.
            At the heart of his operation is Neville, his loyal service dog and constant companion. Neville isn't just a working dog; he's Chris's world, a furry beacon of unwavering support and companionship.
             Together, they form an inseparable duo, their bond a testament to the profound connection between humans and their four-legged counterparts.
            Driven by a passion for animal welfare, Chris works tirelessly to ensure that every dog entrusted to his care experiences a safe, loving, and enriching environment.
             From the moment they step through the doors of his daycare,
             dogs are greeted with warmth and compassion, their individual needs attentively met with a tailored approach.
            Whether it's providing engaging playtime with an array of toys, offering nurturing grooming services, conducting enriching training sessions, or serving up nutritious meals and delectable treats,
             Chris goes above and beyond to ensure that every dog feels cherished and content during their stay.
            But beyond the services offered, what sets Chris's daycare apart is the palpable love and affection that permeates every interaction.
             Dogs aren't just clients; they're cherished members of the family.
            For Chris, the joy of seeing tails wagging and furry faces light up with happiness is its own reward.
             His dog daycare isn't just a business—it's a labor of love, a testament to the profound impact that animals can have on our lives. 
             And at the center of it all is Neville, his steadfast companion and constant reminder of the boundless love that exists between humans and their furry friends.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
