
import React, {useEffect, useState} from "react";

const GET_PROFIT = 'http://localhost:5000/get_profit_per_month/1/2'

const FinInfo = () => {
    const [profit, setProfit] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchDate = async() => {
            try {
                const response = await fetch(GET_PROFIT)
                const data = await response.json()
                setProfit(data)
            }
            catch (error){
                console.log(error)
            }

            setLoading(false)
        }
        fetchDate()
    }, [])
    return(<div>
            {loading && 'Loading...'}
            {profit.map(profit => (
                <p>Остаток средств за месяц: <strong>{profit.profit}</strong></p>
            ) )}

                {/*<p>Остаток средств за месяц: {profit[1]}</p>*/}
        </div>

    )}

export default FinInfo