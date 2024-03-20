import Air_max from './air_max/air_max'
import SB_dunk_low from './SB_dunk_low/SB_dunk_low'
import Air_zoom from './air_zoom/air_zoom'

const Nike = () => {
  return (
    <div className=''>
        <div className='container'>
            <div className=''>
                <Air_max/>
                <SB_dunk_low/>
                <Air_zoom/>
            </div>
        </div>
    </div>
  )
}

export default Nike