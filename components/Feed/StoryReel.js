import React from 'react'
import './StoryReel.css'
import Story from './Story'

/*Profile Pictur*/
import kivanc from '../../img/Profile/kivanc tatlitug.jpg'
import fahriye from '../../img/Profile/fahriye evcen.jpg'
import burak from'../../img/Profile/burak ozcivit.jpg'
import angelina from '../../img/Profile/angelina jolie.jpg'
import selena from  '../../img/Profile/selena gomez.jpg'
/*Story Picture*/
import antalya from '../../img/Story/antalya.jpg'
import bodrum from '../../img/Story/bodrum.jpg'
import istanbul from '../../img/Story/istanbul.jpg'
import lasvegas from '../../img/Story/lasvegas.jpg'
import hawai from '../../img/Story/hawai.jpg'

const StoryReel = () => {
  return (

    <div className="storyReel">
            <Story 
                image={antalya}
                profileSrc={fahriye}
                title="Fahriye Evcen"
            />
            <Story 
                image={bodrum}
                profileSrc={kivanc}
                title="Kıvanç Tatlıtuğ"
            />
            <Story 
                image={istanbul}
                profileSrc={burak}
                title="Burak Özçivit"
            />
            <Story 
                image={lasvegas}
                profileSrc={angelina}
                title="Angelina Jolie"
            />
            <Story 
                image={hawai}
                profileSrc={selena}
                title="Selena Gomez"
            />
        </div>
  
  )
}

export default StoryReel