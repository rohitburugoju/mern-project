import "./Home.css";
import articleImage from "../../assets/Article-Writing-1.jpg";

function Home() {
  return (
    <div className='articleHome'>
      <h1 style={{color:'#4e5180'}}>Blog App</h1>
      <img src={articleImage} alt="" className="artcleImage" />
      <p className="lead">
      A blog app is a versatile software platform that empowers users to create, publish, and manage blog content. It offers tools for writing and editing posts, incorporating multimedia, and customizing the blog's appearance through themes and widgets. Users can schedule posts, manage drafts, and utilize SEO tools to enhance visibility. The app often includes features for user roles management, enabling collaborative content creation, and provides a commenting system for reader engagement. Analytics tools track blog performance, while social sharing options facilitate content distribution across various platforms. This makes blog apps ideal for individuals or organizations looking to share information and engage with an online audience.</p>
    </div>
  );
}

export default Home;
