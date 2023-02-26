import React, { useEffect, useState} from "react";



const GET_SPEND = 'http://127.0.0.1:5000/get_spend/1'
const Spend = () => {
    const [spends, setSpends] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchDate = async() => {
            try {
                const response = await fetch(GET_SPEND)
                const data = await response.json()
                setSpends(data)
            }
            catch (error){
                console.log(error)
            }

            setLoading(false)
        }
        fetchDate()
    }, [])
    return(<div>
            <h3 className="pb-5">Ваши траты</h3>

            <table className="text-left table-fixed border-separate border-spacing-2 border-solid border-2 border-indigo-600 w-1/2">
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Описание</th>
                    <th>Категория</th>
                    <th>Сумма</th>
                </tr>
                </thead>
                <tbody>

            {loading && 'Loading...'}
            {spends.map(spend => (
                <tr key={spend.id}>
                    <td>{spend.date_d}.{spend.date_m}.{spend.date_y}</td>
                    <td>{spend.desc}</td>
                    <td>{spend.category}</td>
                    <td>{spend.sum.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' Руб.'}</td>
                </tr>
            ) )}
                </tbody>
            </table>
            <a href="#" className="text-lg text-center text-indigo-600">Добавить расход</a>
        </div>

    )}
export default Spend

