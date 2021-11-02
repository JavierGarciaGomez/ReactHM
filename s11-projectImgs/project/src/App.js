// 97
import { Formik, Field, Form } from "formik";
import { useState } from "react";

function App() {
  const [photos, setphotos] = useState([]);
  const open = (url) => {
    window.open(url);
  };
  console.log("photos", { photos });
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    "Client-ID os3uLS9GNBgTyrBVVJ3OocUfENe3QGfSKOZUIGJj8W0)",
                },
              }
            );
            const data = await response.json();
            setphotos(data.results);
          }}
        >
          <Form>
            <Field name="search"></Field>
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map((photo) => {
            return (
              <article key={photo.id} onClick={() => open(photo.links.html)}>
                <img src={photo.urls.thumb} alt={photo.alt_description}></img>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
