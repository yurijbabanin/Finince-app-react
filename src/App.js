import SelectorDate from './components/SelectorDate/SelectorDate'
import Revenue from './components/Revenue/Revenue'
import Cost from './components/Cost/Cost'
import FinInfo from './components/FinInfo/FinInfo'
import Spend from './components/Spend/Spend'

const App = () => {
    return <div>
        {/*<Header />*/}
        <SelectorDate />
        <div className="">
            <div className="flex flex-row">
                <div className="basis-1/4">
                    <Revenue />
                    <FinInfo />
                </div>
            <div className="basis-1/4">
        <Cost />
            </div>
            <div className="basis-1/2">
        <Spend />
            </div>
            </div>



        </div>

    </div>
}

export default App;
