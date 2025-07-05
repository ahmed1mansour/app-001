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
          <Card type='m5'>
            <h1 className='text-4xl'>BMW M5 Competition</h1>
            <p className='text-xl'>
              • 4.4L V8 Twin-Turbo. <br />
              • 617 HP with M xDrive. <br />
              • 0 –100 km/h in 3.3 seconds.
            </p>
            <div className=' flex justify-center items-center flex-col'>
              <Btn type='test'> Test Drive</Btn>
              <Btn type='more'>More</Btn>
            </div>
          </Card>
        </div>



        <div>
          <Img_card type='x6'></Img_card>
          <Card type='x6'>
            <h1 className='text-4xl'>BMW X6 2024</h1>
            <p className='text-xl'>
              • 3.0L I6 TwinPower Turbo. <br />
              • 375 HP with xDrive AWD. <br />
              • 0 –100 km/h in 5.3 seconds.
            </p>
            <div className=' flex justify-center items-center flex-col'>
              <Btn type='test'> Test Drive</Btn>
              <Btn type='more'>More</Btn>
            </div>
          </Card>
        </div>



        <div>
          <Img_card type='m8'></Img_card>
          <Card type='m8'>
            <h1 className='text-4xl'>BMW M8 Convertible</h1>
            <p className='text-xl'>
            • 4.4L V8 Twin-Turbo. <br />
            • 617 HP with M xDrive.   <br />
            • 0 –100 km/h in 3.2 seconds. 
            </p>
            <div className=' flex justify-center items-center flex-col'>
              <Btn type='test'> Test Drive</Btn>
              <Btn type='more'>More</Btn>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default App
