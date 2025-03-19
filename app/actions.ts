"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { error: "All fields are required" }
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message")
    }

    // Redirect to thank you page or return success
    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error:", error)
    return {
      error: "Failed to send message. Please try again later.",
      details: error instanceof Error ? error.message : String(error),
    }
  }
}