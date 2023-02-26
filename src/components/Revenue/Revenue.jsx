
import React, {useEffect, useState} from "react";

const GET_REVENUE = 'http://127.0.0.1:5000/get_revenue/1/2'
const Revenue = () => {
    const [revenues, setRevenues] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchDate = async() => {
            try {
                const response = await fetch(GET_REVENUE)
                const data = await response.json()
                setRevenues(data)
            }
            catch (error){
                console.log(error)
            }

            setLoading(false)
        }
        fetchDate()
    }, [])
    return(<div>
            <h3 className="pb-5">Доходы</h3>
            <table className="text-left table-fixed border-separate border-spacing-2 border-solid border-2 border-indigo-600">
                <thead>
                <tr>
                    <th>Описание</th>
                    <th>Сумма</th>
                </tr>
                </thead>
                <tbody>
                {loading && 'Loading...'}
                {revenues.map(revenue => (
                    <tr key={revenue.id}>
                        <td>{revenue.desc}</td>
                        <td>{revenue.sum.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' Руб.'}</td>
                    </tr>
                ) )}
                </tbody>
            </table>
        </div>

    )}

export default Revenue