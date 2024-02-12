import './MainPage.css';
import Button from "./Button.js"
import { useNavigate } from 'react-router-dom';


function MainPage() {
  const navigate = useNavigate();



  const showLoveMessage = () => 
  {
    navigate('/2MNov/show')
  };

  document.body.classList.add("no-scroll")

  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <header className="MainPage-header">
        <Button name="Abrir" click={showLoveMessage} />
        
      </header>
    </div>
  );
}

export default MainPage;
