const TOKEN = "7493808239:AAFgWV6c--dJPOosNw4u0pU-Vdmv0qt9ov8";
const CHAT_ID = "-4249676517";

const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const sendMessage = async (message) => {
  try {
    const response = await fetch(URI_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}`);
    }

    return response.json();
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Ошибка ${e.message}`);
    }
  }
};
