import axios from 'axios'
import React from 'react'

function Conins(props) {
    console.log(props.coinData);
  return (
    <div>Conins

    </div>
  )
}
export const getStaticProps = async()=>{
    const data = await axios.get("https://api.coinstart.app/public/v1/coins?skip=0")
    return {
        props:{
            coinData: data.data
        }
    }
}

export default Conins
