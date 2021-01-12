require('dotenv/config');

export default  {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'up',
  port: 3306,
  define: {
    timestamps: true,
  },
};