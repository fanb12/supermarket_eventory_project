const url = 'http://localhost:5000/api/products'; // Assuming your backend route for saving products is /api/products

const uploadProductData = async (images, name, description, price) => {
  const formData = new FormData();

  // Append each image file to the FormData
  images.forEach((image, index) => {
    formData.append('images', image); // Use 'images' as the field name for all images
  });

  formData.append('name', name);
  formData.append('description', description);
  formData.append('price', price);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData, // Send the FormData containing the files and other data
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error saving product data:", errorData);
      throw new Error(`Failed to save product data: ${response.status}`);
    }

    const savedProduct = await response.json();
    return savedProduct; // Return the response from your backend (e.g., the saved product data)
  } catch (error) {
    console.error("Error sending product data:", error);
    throw error;
  }
};

export default uploadProductData;