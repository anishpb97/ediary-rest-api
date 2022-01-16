import dotenv from 'dotenv';
import { Server } from 'http';
import { setupApplication } from '@/api/config/app';

dotenv.config();

setupApplication().then(app => {
    const { PORT } = process.env;
    // eslint-disable-next-line no-console
    const server:Server = app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
}).catch(console.error);


