const chatInput=document.querySelector("#chat-input")
const sendButton=document.querySelector("#send-btn")

let userText=null;

const handleOutgoingChat=()=>{
    userText=chatInput.value.trim();  // Get chatInput value and remove extra spaces
    console.log(userText);
    
}

sendButton.addEventListener("click",handleOutgoingChat);
