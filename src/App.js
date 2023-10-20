import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";


function App() {

  return (
    <div>
      {/* header, content and footer functional container. */}
      <Header/>
      <Content/>
      <Footer/>
      {/* we can add styles using styled components */}
    </div>
  );
}

export default App;
