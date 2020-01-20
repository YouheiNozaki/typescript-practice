import Express from 'express';

import connectDB from '../../config/db';
import UserRouter from './routes/api/user';
import AuthRouter from './routes/api/auth';
import ProfileRouter from './routes/api/profile';
import PostsRouter from './routes/api/posts';

const app = Express();

// Connect Database
connectDB();

// Init Middleware
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', UserRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/profile', ProfileRouter);
app.use('/api/posts', PostsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
