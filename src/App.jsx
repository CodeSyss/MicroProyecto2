import Header from "./component/Header";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
// import MenuSection from './component/MenuSection';
// import BuildYourPokeSection from './component/BuildYourPoke';
// import TestimonialsSection from './component/comments';
import ContactSection from './component/contactSection';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* <MenuSection />
      <BuildYourPokeSection />
      <TestimonialsSection /> */}
      <ContactSection /> 
      <Footer />
    </div>
  );
};

export default App;
