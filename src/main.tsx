import React from 'react';
import ReactDOM from 'react-dom/client';
import { Typography } from './components/Typography/Typography';
import { TextInput } from './components/DataEntry/TextInput';
import { Toast, ToastContainer } from './components/Feedback/Toast';
import './styles/globals.css';

const App = () => {
  const [textValue, setTextValue] = React.useState('');

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Typography variant="h1" className="mb-8">Design System</Typography>
      
      <div className="mb-8">
        <Typography variant="h2" className="mb-4">Typography Examples</Typography>
        <div className="space-y-2">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="body1">Body Text 1</Typography>
          <Typography variant="body2">Body Text 2</Typography>
          <Typography variant="caption">Caption Text</Typography>
        </div>
      </div>
      
      <div className="mb-8">
        <Typography variant="h2" className="mb-4">TextInput Examples</Typography>
        <div className="space-y-4">
          <TextInput 
            label="Default Input"
            placeholder="Type something..."
            value={textValue}
            onChange={setTextValue}
          />
          <TextInput 
            label="Error State"
            placeholder="This has an error"
            value={textValue}
            onChange={setTextValue}
            state="error"
            helperText="This field is required"
          />
        </div>
      </div>
      
      <div className="mb-8">
        <Typography variant="h2" className="mb-4">Toast Examples</Typography>
      </div>
      
      <ToastContainer position="bottom-right">
        <Toast
          variant="info"
          title="Information"
          message="This is an information message"
        />
        <Toast
          variant="success"
          title="Success"
          message="Operation completed successfully"
        />
      </ToastContainer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 