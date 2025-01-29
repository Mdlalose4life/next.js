import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { PlantInfoContextProvider } from './store/PlantInfo-Contex.jsx';
import { FetcthedPlantsContextProvider } from './store/FetchPlans-context.jsx';
import { FavoritePlantContextProvider } from './store/FavoritePlantContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FetcthedPlantsContextProvider>
    <PlantInfoContextProvider>
      <FavoritePlantContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoritePlantContextProvider>
    </PlantInfoContextProvider>
  </FetcthedPlantsContextProvider>
);
