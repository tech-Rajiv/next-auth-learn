async function Dashboard({ session }: any) {
  const { user } = session;
  return (
    <div className="">
      <h2 className="font-medium text-xl">Welcome back, {user.name}</h2>
      <p>ur mail is {user?.email}</p>
    </div>
  );
}

export default Dashboard;
