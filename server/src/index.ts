import { config } from './config';
import { app } from './app';

app.listen(config.PORT, () => {
	console.log(`server running in http://localhost:${config.PORT}`);
});
