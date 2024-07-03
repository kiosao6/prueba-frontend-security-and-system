import { useState } from "react"

export const useShowMessage = () => {

  const [showMessage, setShowMessage] = useState<boolean>(false)

  const showSuccessMessage = () => {    
    if(!showMessage) {
      setShowMessage(true); 
      setTimeout(() => {
        setShowMessage(false);
      }, 2500);   
    };
  };

  return {
    showMessage,
    showSuccessMessage
  }
}