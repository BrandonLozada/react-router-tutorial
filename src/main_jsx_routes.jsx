import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
  } from "react-router-dom";
  
  // Esta es la forma de definir rutas como elementos, tiene otra estructura diferente a la normal que es como objetos.
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
        loader={rootLoader}
        action={rootAction}
        errorElement={<ErrorPage />}
      >
        <Route errorElement={<ErrorPage />}>
          <Route index element={<Index />} />
          <Route
            path="contacts/:contactId"
            element={<Contact />}
            loader={contactLoader}
            action={contactAction}
          />
          <Route
            path="contacts/:contactId/edit"
            element={<EditContact />}
            loader={contactLoader}
            action={editAction}
          />
          <Route
            path="contacts/:contactId/destroy"
            action={destroyAction}
          />
        </Route>
      </Route>
    )
  );