import { Outlet} from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer';
import Whatsapp from '../components/share/Whatsapp';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Whatsapp/>
      <Footer />
    </div>
  );
};

export default RootLayout;
