import Header from './dashboardComponents/Header'
import Sidebar from './dashboardComponents/Sidebar'

const Dashboard = () => {
    return (
        <div className='flex flex-col w-full h-full'>
            <Header />
            <div className='h-full flex'>
                <div className='hidden md:flex h-full w-[172px] z-30 flex-col fixed inset-y-0'>
                    <Sidebar />
                </div>
                <main className='ml-[172px] p-2'>
                    <h1>Dashboard</h1>
                </main>
            </div>
        </div>
    )
}

export default Dashboard