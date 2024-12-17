import {ApiService} from "./services/api"
import {useDataQuery} from "./hooks/usefetchData"

const App = () => {
	const {}=useDataQuery(ApiService({endPoints:"get",urlEndpoint:"/profile"}),"user")
	return (



	)
};

export default App;
