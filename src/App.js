import React from "react";
import Lists from "./components/Lists";

function App() {
  const url = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";
  const [blogs, setBlogs] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {     
        const response = await fetch(url);
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [])

  return (
    <div>
      {blogs ? <Lists blogs={blogs} />: <h1 className="u-align--center">Loading blog posts...</h1>}
    </div>
  );
}

export default App;
