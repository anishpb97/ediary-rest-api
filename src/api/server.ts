import 'module-alias/register';
import dotenv from 'dotenv';
import { MongoHelper } from '@/api/infra/db/mongodb';

dotenv.config();

const { PORT , MONGO_URL } = process.env;  

MongoHelper.connect(MONGO_URL || 'mongodb://127.0.0.1:27017')
  .then(async () => {
    const { setupApplication } = await import('./config/app')
    const app = await setupApplication()
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
  })
  .catch(console.error)
