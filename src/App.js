import SelectorDate from './components/SelectorDate/SelectorDate'
import Revenue from './components/Revenue/Revenue'
import Cost from './components/Cost/Cost'
import FinInfo from './components/FinInfo/FinInfo'
import Spend from './components/Spend/Spend'

const App = () => {
    return <div>
        {/*<Header />*/}
        <SelectorDate />
        <div className="flex justify-between justify-items-center p-5">
            <div className="flex justify-between justify-items-center">
        <Revenue />
        <Cost />
            </div>
        <FinInfo />

        <Spend />
        </div>

    </div>
}

export default App;
