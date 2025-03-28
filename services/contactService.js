import axios from "axios";

export async function sentMail({ email, message }) {
    try {
      const response = await axios.post(
        "https://getform.io/f/bvrwddwb",
        { email, message },
        { headers: { Accept: "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.error("Error al enviar:", error);
      throw error;
    }
  }
  