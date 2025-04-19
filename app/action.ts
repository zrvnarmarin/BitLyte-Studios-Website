"use server";

import { z } from "zod";

// Define the server function with both `prevState` and `formData` arguments
export async function serverFunction(
  prevState: { fullName: string | null; email: string | null; message: string | null },
  formData: FormData
) {
  const schema = z.object({
    fullName: z.string().nonempty("Full name is required"), // Ensure fullName is a non-empty string
    email: z.string().email("Invalid email address"), // Validate email format
    message: z.string().nonempty("Message is required"), // Ensure message isn't empty
  });

  // Get the form data from the FormData object
  const fullName = formData.get("full-name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("project-message") as string;

  // Validate the form data using Zod
  try {
    const data = schema.parse({
      fullName, // Must not be empty
      email,    // Must be a valid email
      message,  // Must not be empty
    });

    // If validation is successful, submit the form data to an API or service
    const response = await fetch("https://usebasin.com/f/ba68da363bf3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: data.fullName,
        email: data.email,
        message: data.message,
      }),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Return success message
    return "hej sve je dobro!"; // Success message
  } catch (error) {
    // If an error occurs (either validation or submission), return error message
    console.error("Error submitting form:", error);
    return "nesto ne valja!"; // Error message
  }
}
