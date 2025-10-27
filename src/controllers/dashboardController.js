export const showDashboard = (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard',
    user: req.session.user
   });
};
