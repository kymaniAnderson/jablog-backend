module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e85a84c8f7c05e377f7960cafc35b773'),
  },
});
