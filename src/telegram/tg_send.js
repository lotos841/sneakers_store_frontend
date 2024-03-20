const baseUrl = 'https://api.telegram.org/bot7196881850:AAHVKossCP9xHNtu_3nMh8sXPP0--oZTe_k/'
const chatId = '-1002142278779'

const sendMessage = async (message) => {
    const url = `${baseUrl}sendMeassage?chat_id=${chatId}&text=${message}`

    const response = await fetch(url);
    
    console.log('responsse', response)
}