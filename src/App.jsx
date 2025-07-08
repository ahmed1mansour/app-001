import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Btn from './components/btn'
import Card from './components/card'
import Img_card from './components/Img_card'



function App() {


  return (
    <>
      <div className='bg-gray-400 p-10 border min-h-screen  w-full gap-7 flex flex-wrap items-center  justify-center'>
        <div>
          <Img_card type='m5'></Img_card>
          <Card
            type='m5'
            title='BMW M5 Competition'
            content='• 4.4L V8 Twin-Turbo.• 617 HP with M xDrive.• 0 –100 km/h in 3.3 seconds.'
            button1='Test Drive'
            button2='More'
          />
        </div>
        <div>
          <Img_card type='x6'></Img_card>
          <Card
            type='x6'
            title='BMW X6 2024'
            content=' • 3.0L I6 TwinPower Turbo. • 375 HP with xDrive AWD.• 0 –100 km/h in 5.3 seconds. '
            button1='Test Drive'
            button2='more'
          />
        </div>



        <div>
          <Img_card type='m8'></Img_card>
          <Card
            type='m8'
            title='BMW M8 Convertible'
            content='• 4.4L V8 Twin-Turbo. • 617 HP with M xDrive. • 0 –100 km/h in 3.2 seconds.'
            button1='Test Drive'
            button2='More'
          />
        </div>
      </div>
    </>
  )
}

export default App
