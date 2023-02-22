
import React, {useEffect, useState} from "react";

const GET_SPEND = 'http://127.0.0.1:5000/get_cost/1/2'
const Cost = () => {

    const [costs, setCosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchDate = async() => {
            try {
                const response = await fetch(GET_SPEND)
                const data = await response.json()
                setCosts(data)
            }
            catch (error){
                console.log(error)
            }

            setLoading(false)
        }
        fetchDate()
    }, [])
    return(<div>
            <h3>Постоянные расходы</h3>
            <table className="table-fixed border-separate border-spacing-2 border-solid border-2 border-indigo-600">
                <thead>
                <tr>
                    <th>Описание</th>
                    <th>Сумма</th>
                </tr>
                </thead>
                <tbody>
                {loading && 'Loading...'}
                {costs.map(spend => (
                    <tr key={spend.id}>
                        <td>{spend.desc}</td>
                        <td>{spend.sum}</td>
                    </tr>
                ) )}
                </tbody>
            </table>
        </div>

    )}

export default Cost